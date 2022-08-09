import React from 'react'

import HistoryCard from './HistoryCard'

const Histories = () => {
  return (
    <div>
      {/* {testHistories.map((historyData) => (
        <HistoryCard key={historyData.name} historyData={historyData} />
      ))} */}
      <HistoryCard />
    </div>
  )
}

export default Histories
