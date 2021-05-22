import {faSuitcase, faPlane, faHotel, faFlag, faCalendarCheck, faUserFriends, faUsers} from '@fortawesome/free-solid-svg-icons'
import istanbul from './images/istanbul.jpg'
import paris from './images/paris.jpg'
import london from './images/london.jpg'
import tokyo from './images/tokyo.jpg'
import giza from './images/giza.jpg'
import athens from './images/athens.jpg'

export const countries = ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Czech', 'Italy', 'Mexico', 'Peru', 'Poland', 'Portugal', 'Spain', 'Turkey']

export const values = [
    {
      icon : faSuitcase, 
      title : 'Corporate Travel Management', 
      content : 'Plan company business trips, monitor employee spending, and receive reports‒all from the palm of your hand.', 
      options: countries,
      Bcolor : '#e86851'
    },
    {
      icon : faHotel, 
      title: 'Meetings and Incentives', 
      content: 'Arranging events on home turf is hard enough, but setting up a conference or incentive trip in a location you’re unfamiliar with is downright intimidating.', 
      options: countries,
      Bcolor : '#65c0b0'
    },
    {
      icon: faPlane, 
      title: 'Travel Experts', 
      content: 'With our dedicated travel agents, you’ll have a committed advisor available for contact throughout the duration of your business trip.', 
      options: countries, 
      optionalOptions: countries,
      Bcolor : '#3d83df'
    }
  ]

export const items = [
  {
    icon :  faFlag,
    title : 'Leader in 12 countries',
    text  : 'Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile'
  },
  {
    icon :  faCalendarCheck,
    title : '4.8 million appointments',
    text : 'booked last month'
  },
  
]

export const elements = [
  {
    icon :  faUserFriends,
    title : '61.9 million clients',
    text : 'visit our websites each month'
  },
  {
    icon :  faUsers,
    title : '92.5k active clients',
    text : 'trust our solutions'
  }
]

export const cards = [
  {
    image : athens,
    city: 'Athens',
    content : 'SEE OPENING'
  },
  {
    image : giza,
    city: 'Giza',
    content : 'SEE OPENING'
  },
  {
    image : istanbul,
    city: 'Istanbul',
    content : 'SEE OPENING'
  },
  {
    image : london,
    city: 'London',
    content : 'SEE OPENING'
  },
  {
    image : paris,
    city: 'Paris',
    content : 'SEE OPENING'
  },
  {
    image : tokyo,
    city: 'Tokyo',
    content : 'SEE OPENING'
  },
]

