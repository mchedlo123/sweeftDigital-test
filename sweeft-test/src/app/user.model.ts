export interface UserObj {
  list: User[],
  pagination: {},
}
export interface User {
  id: number,
  name: string,
  lastName: string,
  prefix: string,
  title: string,
  imageUrl: string
}

export interface CertainUser {

  id: number,
  name: number,
  lastName: string,
  prefix: string,
  title: string,
  imageUrl: string,
  jobDescriptor: string,
  jobArea: string,
  jobType: string,
  email: string,
  ip: string,
  company: {
    name: string,
    suffix: string
  },
  address: {
    zipCode: string,
    city: string,
    streetAddress: string,
    country: string,
    state: string
  }
}
