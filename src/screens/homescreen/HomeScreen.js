import React, { useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])
  const { videos,activeCategory, loading } = useSelector(state => state.homeVideos)

  const fetchData = () =>{
    if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
  }

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<div className='spinner-border text-danger d-block mx-auto'></div>}
        className='row'
        style={{overflow:'none'}}
        >
        

          {!loading ? 
            videos.map(video => {
              return <Col key={video.id+Math.random()} lg={3} md={4}>
                <Video video={video} />
              </Col>
            })
            : [...Array(20)].map((num,index) => <Col key={index} lg={3} md={4}>  <SkeletonVideo />  </Col>)

          }
        
      </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen