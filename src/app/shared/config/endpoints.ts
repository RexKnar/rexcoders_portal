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
  getTrainingListUrl: '/api/training/getall',
  getTrainingDetailUrl: '/api/training/get?trainingId=',
};
export const DOMAIN_CONFIG = {
  getDomainListUrl: '/api/domain/getall',
  addDomainUrl: '/api/domain/add',
  updateDomainUrl:'/api/domain/update',
  deleteDomainUrl:'/api/domain/delete'
};

export const MENTOR_CONFIG = {
  getMentorListUrl: '/api/mentors/getall',
  getMentorDetailsUrl: '/api/mentors/getdetails',
  addMentorUrl: 'api/mentors/add',
};

export const PAYMENT_CONFIG = {
  createOrderUrl: '/api/payment/createOrder',
  updateOrderUrl: '/api/payment/updateOrder',
};

export const COUNTRY_CONFIG = {
  getCountryListUrl:'/api/country/getall',
  postCountryListUrl:'/api/country/add',
  putCountryListUrl:'/api/country/update',
  deleteCountryListUrl:'/api/country/delete/?countryId=1'
}

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
export const MODULE_CONFIG = {
  getModuleListUrl:'/api/syllabus/module/getall',
  postModuleListUrl:'/api/syllabus/module/add',
  putModuleListUrl:'/api/syllabus/module/update'
}
export const CATEGORY_CONFIG = {
  getCategoryListUrl:'/api/category/getall',
  addCategoryUrl:'/api/category/add',
  getAllCategoryUrl:'/api/category/getall?domainId=3'
}

export const SUBCATEGORY_CONFIG = {
  getSubCategoryListUrl:'/api/subcategory/getall'
}
export const LANGUAGE_CONFIG = {
  getLanguageListUrl:'/api/language/getall'
}


