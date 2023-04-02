import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import './watchScreen.scss'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos, getVideosById } from '../../redux/actions/videos.action'

const WatchScreen = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const {loading,video} = useSelector(state => state.selectedVideo)

    useEffect(()=>{
        dispatch(getVideosById(id))
        dispatch(getRelatedVideos(id))
    },[dispatch,id])

    const { videos, loading: relatedVideosLoading } = useSelector(
        state => state.relatedVideos
     )

  return (
    <Row>
        <Col lg={8}>
            <div className="watchScreen__player">
                <iframe src={`https://www.youtube.com/embed/${id}`} 
                allowFullScreen
                title={video?.snippet?.title}
                width='100%'
                height='100%'
                ></iframe>
            </div>
            {
                !loading && <VideoMetaData  video={video} videoId={id}/> 
            }
            
            <Comments id={id} totalComments={video?.statistics?.commentCount}/>
            
        </Col>
        <Col lg={4}>
        
            
            {!relatedVideosLoading  ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147' baseColor='black'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
        </Col>
    </Row>
  )
}

export default WatchScreen