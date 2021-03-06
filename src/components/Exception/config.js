/*
 * @Author: lifan
 * @Date: 2018-11-02 16:21:53
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-11-02 16:21:53
 */
import Img403 from '../../assets/svgs/403.svg';
import Img404 from '../../assets/svgs/404.svg';
import Img500 from '../../assets/svgs/500.svg';

const config = {
  403: {
    img: Img403,
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: Img404,
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  500: {
    img: Img500,
    title: '500',
    desc: '抱歉，服务器出错了',
  },
};

export default config;
