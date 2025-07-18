import http from "./axiosInstance";
import { type IJobs, type IJobAlert } from "../types";

type ICreateJobAlert = {
  name: string;
  search: string;
  description?: string;
  includeWords?: string[];
  omitWords?: string[];
};

type IJobsParams = {
  page: number;
  perPage: number;
  search?: string;
  dateRange?: [string, string];
};

type Metadata = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};

export const getAllJobAlerts = async () => {
  const res = await http.get("/job-alert");

  return res.data.data as IJobAlert[];
};

export const getJobAlert = async (id: string) => {
  const res = await http.get(`/job-alert/${id}`);

  return res.data.data as IJobAlert;
};

export const createJobAlert = async (data: ICreateJobAlert) => {
  const res = await http.post("job/alert", data);

  return res.data.data as unknown;
};

export const editJobAlert = async (
  id: string,
  data: Partial<ICreateJobAlert>
) => {
  const res = await http.patch(`/job/alert/${id}`, data);

  return res.data.data as unknown;
};

export const deleteJobAlert = async (id: string) => {
  const res = await http.delete(`/job/alert/${id}`);

  return res.data.data as unknown;
};

export const getJobAlertJobs = async (id: string, params: IJobsParams) => {
  const res = await http.get(`/job-alert/${id}/jobs`, { params });

  return res.data.data as { jobs: IJobs[]; metadata: Metadata };
};