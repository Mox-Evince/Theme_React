// ** Reactstrap Imports
import { Card, CardBody, Row, Col } from 'reactstrap'

// ** Types
import { Photo } from './types'

interface ProfileLatestPhotosProps {
  data: Photo[]
}

const ProfileLatestPhotos: React.FC<ProfileLatestPhotosProps> = ({ data }) => {
  const renderPhotos = () => {
    return data.map((item, index) => {
      return (
        <Col key={item.id} md='4' xs='6' className='profile-latest-img'>
          <a href='/' onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
            <img className='img-fluid rounded' src={item.img} alt='User photos' />
          </a>
        </Col>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5 className='mb-0'>Latest Photos</h5>
        <Row>{renderPhotos()}</Row>
      </CardBody>
    </Card>
  )
}

export default ProfileLatestPhotos
