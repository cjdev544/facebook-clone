import {
  addDoc,
  collection,
  doc,
  orderBy,
  setDoc,
  query,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useCollection } from 'react-firebase-hooks/firestore'
import { toast } from 'react-toastify'

import { db, storage } from '../firebase/config'

const usePosts = () => {
  const uploadImage = async (file, postID) => {
    const postCollection = ref(storage, `posts/${postID}`)
    await uploadBytes(postCollection, file)
  }

  const getImageURL = async (postID) => {
    const postRef = ref(storage, `posts/${postID}`)
    const imageUrl = await getDownloadURL(postRef)
    return imageUrl
  }

  const deletePost = (postId) => {
    const docRef = ref(storage, `posts/${postId}`)
    deleteDoc(docRef)
  }

  const createNewPost = async (dataPost, file) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...dataPost,
        likes: [],
        comments: [],
        createdAt: serverTimestamp(),
      })

      if (file) {
        await uploadImage(file, docRef.id)
        const imageUrl = await getImageURL(docRef.id)

        const refDoc = doc(db, 'posts', docRef.id)
        await setDoc(refDoc, {
          ...dataPost,
          createdAt: serverTimestamp(),
          image: imageUrl,
        })
      }
    } catch (err) {
      deletePost(docRefId)
      console.log(err)
      toast.error('Error al subir el post, intenta nuevamente')
    }
  }

  const [realTimePosts, loading, error] = useCollection(
    query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  )

  const allPosts = realTimePosts?.docs.map((post) => {
    const data = post.data()
    return {
      id: post.id,
      user: data.user,
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      message: data.message,
      image: data.image,
      createdAt: data.createdAt,
      likes: data.likes || [],
      comments: data.comments || [],
    }
  })

  const likeAPost = async (post, authUserId, likeOrNoLike) => {
    let setPost

    if (likeOrNoLike !== 1) {
      setPost = {
        ...post,
        likes: post?.likes ? [...post.likes, authUserId] : [authUserId],
      }
    } else {
      setPost = {
        ...post,
        likes: post?.likes.filter((like) => like !== authUserId),
      }
    }
    const postRef = doc(db, 'posts', post.id)
    try {
      await updateDoc(postRef, setPost)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    realTimePosts: allPosts,
    loading,
    error,
    createNewPost,
    deletePost,
    likeAPost,
  }
}

export default usePosts
