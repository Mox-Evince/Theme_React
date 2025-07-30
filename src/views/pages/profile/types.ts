// Profile Data Types
export interface ProfileHeader {
  avatar: string
  username: string
  designation: string
  coverImg: string
  profileStats: {
    posts: number
    followers: number
    following: number
  }
}

export interface UserAbout {
  about: string
  joined: string
  lives: string
  email: string
  work: string
  education: string
}

export interface SuggestedPage {
  avatar: string
  username: string
  subtitle: string
}

export interface TwitterFeed {
  imgUrl: string
  title: string
  id: number
  description: string
  tags: string[]
}

export interface Post {
  id: number
  avatar: string
  username: string
  postTime: string
  content: string
  images?: string[]
  likes: number
  comments: number
  sharedTimes: number
}

export interface Photo {
  id: number
  img: string
}

export interface FriendSuggestion {
  avatar: string
  name: string
  mutualFriends: number
}

export interface Poll {
  id: number
  question: string
  options: {
    text: string
    votes: number
  }[]
}

export interface ProfileData {
  header: ProfileHeader
  userAbout: UserAbout
  suggestedPages: SuggestedPage[]
  twitterFeeds: TwitterFeed[]
  post: Post[]
  latestPhotos: Photo[]
  suggestions: FriendSuggestion[]
  polls: Poll[]
}
