import React, { useEffect, useState } from 'react';
import './news.scss';
import axios from 'axios';
import moment from 'moment';
import {
  ENVIRONMENT
} from '../../utils/const/environment';
import {
  REGEX
} from '../../utils/const/regex';

const News = () => {
  const [news, setNews] = useState(null);

  const formatDate = date => {
    return {__html: moment(date, 'YYYY-MM-DD').format('DD &#8226; MM &#8226; YYYY')};
  };

  const formatContent = data => {
    const keys = Object.keys(REGEX);

    keys.forEach(key => {
      data = data.replace(REGEX[key].pattern, REGEX[key].replace);
    });

    return {__html: data};
  };

  useEffect(() => {
    if(!news) {
      const url = ENVIRONMENT === 'development'
          ? './data/news.json'
          : 'http://zyx77.dreamhosters.com/beta/data/home.php';

      axios.get(url)
          .then(response => {
            setNews(response.data);
          })
          .catch(console.log)
          .finally()
    }
  });

  return (
      <section id="newsContainer">
        {
          news &&
          news.map(row => (
              <div key={row.date}>
                <div dangerouslySetInnerHTML={formatDate(row.date)}></div>
                <div dangerouslySetInnerHTML={formatContent(row.content)}></div>
              </div>
          ))
        }
      </section>
  );
};

export default News;
