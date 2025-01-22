import type { AxiosResponse } from 'axios';
import axios from 'axios'
import { API_ENDPOINTS } from './endpoint'
import type { InterfaceReport } from '@/types/report';


const apiAxios = axios.create({
	baseURL: "http://localhost:3001",
	timeout: 150000000,
	headers: {
		'Content-Type': 'application/json',
	}})


  export const postReport= (report:InterfaceReport[]):Promise<AxiosResponse<InterfaceReport[]>>=>{
    return apiAxios.post(API_ENDPOINTS.REPORT,report)
  }