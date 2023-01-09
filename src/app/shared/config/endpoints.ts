import { environment } from '../../../environments/environment';

export const ROUTE_CONFIG = {
  baseUrl: environment.baseUrl,
};
export const AUTH_CONFIG = {
  loginUrl: '/api/auth/login',
  userRegistrationUrl: '/api/user/register',
};
export const USER_CONFIG = {
  getUserByTokenUrl: '/api/user/getbytoken',
};
export const TRAINING_CONFIG = {
  addTrainingDetailsUrl:'/api/training/add',
  getTrainingListUrl: '/api/training/getall',
  getTrainingDetailUrl: '/api/training/get?trainingId=',
};
export const DOMAIN_CONFIG = {
  getDomainListUrl: '/api/domain/getall',
  addDomainUrl: '/api/domain/add',
  updateDomainUrl:'/api/domain/update',
  deleteDomainUrl:'/api/domain/delete'
};

export const PAYMENT_CONFIG = {
  createOrderUrl: '/api/payment/createOrder',
  updateOrderUrl: '/api/payment/updateOrder',
};

export const STATE_CONFIG = {
  getStateListUrl:'/api/state/getall?countryId=1',
  postStateListUrl:'/api/state/add',
  putStateListUrl:'/api/state/update',
  deleteStateListUrl:'/api/state/delete/?stateId=1'
}

export const CITY_CONFIG = {
  getCityListUrl:'/api/city/getall',
  postCityListUrl:'/api/city/add',
  putCityListUrl:'/api/city/update',
  deleteCityListUrl:'/api/city/delete/?cityId=3'
}

export const BATCH_CONFIG = {
  getBatchListUrl:'/api/batch/getall'
}

export const CONSULT_CONFIG = {
  bookConsultationUrl: '/api/consultation/book'
}


export const MENTORS_CONFIG = {
  addMentorsUrl: '/api/mentors/add'
}