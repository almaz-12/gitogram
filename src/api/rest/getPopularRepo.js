import { makeRequest } from '@/api/request';
import { addStartingZero } from '@/common/helpers';

export const getPopularRepo = (lang = 'javascript') => {
  const dateWeekAgo = new Date(new Date().getTime() - 604800000);
  const params = new URLSearchParams();

  const day = addStartingZero(dateWeekAgo.getDate());
  const month = addStartingZero(dateWeekAgo.getMonth() + 1);
  const year = dateWeekAgo.getFullYear();
  const fullDate = `${year}-${month}-${day}`;

  params.append('order', 'desc');
  params.append('sort', 'stars');
  params.append('per_page', 10);
  params.append('q', `language:${lang} created:>${fullDate}`);
  console.log(params);

  return makeRequest({
    url: `/search/repositories?${params}`,
  });
};
