import { synchronizationApi } from '@/service/synchronization'
export const DO_SOMETHING = payload => async dispatch =>{
  console.log(payload);
  const res = await synchronizationApi.getTask({ ...payload })
  // dispatch({
  //   type:'CHECK_MOMENT'
  // })
}