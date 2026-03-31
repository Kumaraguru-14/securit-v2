import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import UseCasesClient from './UseCasesClient';

type UseCaseItem = IService & { [key: string]: unknown };

const UseCases = () => {
  const allUseCases: UseCaseItem[] = getMarkDownData<UseCaseItem>('src/data/services');
  const useCasesData: UseCaseItem[] = allUseCases.slice(8, 11);

  return <UseCasesClient useCasesData={useCasesData} />;
};

UseCases.displayName = 'UseCases';
export default UseCases;
