import {
  addDoc,
  getFirestore,
  onSnapshot,
  collection,
  doc,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  query,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import {
  getStorage,
  getDownloadURL,
  deleteObject,
  ref,
  uploadBytes,
} from 'firebase/storage'
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
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      message: data.message,
      image: data.image,
      createdAt: data.createdAt,
    }
  })

  return {
    realTimePosts: allPosts,
    loading,
    error,
    createNewPost,
    deletePost,
  }
}

export default usePosts
