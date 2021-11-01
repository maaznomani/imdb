import React, { useEffect, useState } from 'react'
import { Col, Card, Container } from 'react-bootstrap'
import Message from '../components/Message'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const [movieData, setMovieData] = useState([])
  const [resultTitles, setResultTitles] = useState([])
  const mySet1 = new Set()
  //const mySet1 = useMemo(() =>[], new Set());
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1750, // width to change options
        settings: {
          dots: false,
          infinite: false,
          speed: 400,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          infinite: false,
          speed: 400,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: false,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log('HomeScreen Component')
      console.log('keyword ', keyword)
      const storedData = localStorage.getItem(keyword)
        ? JSON.parse(localStorage.getItem(keyword))
        : null
      console.log('storedData ', storedData)
      if (keyword) {
        if (!storedData) {
          const data = await axios
            .get('https://imdb-api.com/API/SearchTitle', {
              params: {
                apiKey: 'k_w4f2jow0',
                expression: keyword,
              },
            })
            .then((response) => response.data.results)
          data.map((m) => mySet1.add(m.resultType))

          console.log('Set Data ', mySet1)
          setResultTitles([...mySet1])
          console.log('resultTitles ', resultTitles)
          console.log(data)
          localStorage.setItem(keyword, JSON.stringify(data))
          setMovieData(data)
        } else {
          console.log('From Local storage')
          console.log('storedData ', storedData)
          storedData.map((m) => mySet1.add(m.resultType))
          console.log('set Data ', mySet1)
          setResultTitles([...mySet1])
          console.log('resultTitles ', resultTitles)
          setMovieData(storedData)
          console.log('movieData ', movieData)
        }
      }
    }
    fetchData()
  }, [match, history, keyword])

  return (
    <>
      <div style={{ width: '66vw', margin: 'auto' }}>
        {movieData.length > 0 ? (
          // <Row>
          resultTitles.map((header) => (
            <Container>
              <h3>{header}</h3>
              <Slider {...settings}>
                {movieData.map((data) =>
                  data.resultType === header ? (
                    <Col>
                      <Card className='movie-card'>
                        <Card.Img src={data.image} />
                        <Card.Body style={{ padding: '0' }}>
                          <Card.Title as='div'>
                            <strong>{data.title}</strong>
                          </Card.Title>
                          <Card.Text as='p'>{data.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ) : (
                    <></>
                  )
                )}
                {/* </Row> */}
              </Slider>
            </Container>
          ))
        ) : keyword ? (
          <Message variant='flush'>No search results found</Message>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default HomeScreen
