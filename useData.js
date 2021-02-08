import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
const csvUrl =
  'https://gist.githubusercontent.com/andre6639/9763d8aaf6d01bc62e545c3de522a962/raw/44487c47172ccb3c8c2209203a8d5c2de9bb05bd/CCNAS_SFO_dailyClimate_data_concise_daily_2015thru2020.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.DATE = new Date(d.DATE);
      d.DailyPeakWindSpeed = +d.DailyPeakWindSpeed;
      d.DailyAverageWindSpeed = +d.DailyAverageWindSpeed;
      d.DailyAverageStationPressure = +d.DailyAverageStationPressure;
      d.DailyPeakWindDirection = +d.DailyPeakWindDirection;
      d.DailySustainedWindDirection = +d.DailySustainedWindDirection;
      d.DailySustainedWindSpeed = +d.DailySustainedWindSpeed;
      d.NAME = d.STATION;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
