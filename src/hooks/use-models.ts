import { useQuery } from '@tanstack/react-query'
import { ModelApi } from '~/api/mode-api'

export const useModels = () => {
  return useQuery({
    queryKey: ['models'],
    queryFn: () => {
      return ModelApi.getModels()
    }
  })
}
