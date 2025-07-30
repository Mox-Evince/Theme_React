// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

// ** Types
import { UserAbout } from './types'

interface ProfileAboutProps {
  data: UserAbout
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <h5 className='mb-75'>About</h5>
        <CardText>{data.about}</CardText>
        <div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>{data.joined}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>{data.lives}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Email:</h5>
          <CardText>{data.email}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Work:</h5>
          <CardText>{data.work}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Education:</h5>
          <CardText>{data.education}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
