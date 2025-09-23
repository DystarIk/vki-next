import type GroupInterface from '@/types/GroupInterface';

export const getGroupsApi = async (): Promise<GroupInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}groups`);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }

    return await response.json() as GroupInterface[];
  }
  catch (err) {
    console.log('>>> getGroupsApi', err);
    return [] as GroupInterface[];
  }
};