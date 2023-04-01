import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import ShowMoreText from 'react-show-more-text'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails, getSubscriptionStatus } from '../../redux/actions/channel.action'

const VideoMetaData = ({video:{snippet,statistics},videoId}) => {
  const {channelId,title,description,channelTitle,publishedAt} = snippet;
  const {viewCount,likeCount} = statistics;

  const dispatch = useDispatch();

  const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(state => state.channelDetails.channel)

  const subscriptionStatus = useSelector(
    state => state.channelDetails.subscriptionStatus
 )

  

  useEffect(()=>{
    dispatch(getChannelDetails(channelId))
    dispatch(getSubscriptionStatus(channelId))
  },[dispatch,channelId])

   return (
    <div className="VideoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </span>
          <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}
                  </span>
                  
               </div>

        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
      <div className='d-flex'>
               <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt=''
                  className='mr-3 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>{channelTitle}</span>
                  <span>
                     {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
                disabled={subscriptionStatus}
               className={`p-2 m-2 border-0 btn ${subscriptionStatus && 'btn-gray'}`}>
               {subscriptionStatus===true? 'subscribed':'subscribe'}
            </button>

      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
        lines={2}
        more="SHOW MORE"
        less="SHOW LESS"
        anchorClass='showMoreText'
        expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData