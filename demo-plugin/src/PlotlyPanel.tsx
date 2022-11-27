import React from 'react';
import { PanelProps} from '@grafana/data';
import Plot from "react-plotly.js"
import { PlotlyOptions } from 'types';
import { Data } from 'plotly.js';

interface Props extends PanelProps<PlotlyOptions> {}

 export const PlotlyPanel: React.FC<Props> = ({ data }) => {
    const headerValues = [];
    const cellValues = [];
    const colorsarray = [];
    let colors: string[][] = [];
    var headerValue
    var cellValue
    let plotlyData: Data[]=[];
    
    for (var i = 0; i < data.series[0].fields.length; i++) {
      headerValue = [data.series[0].fields[i].name];
      headerValues[i] = headerValue;
      cellValue = data.series[0].fields[i].values.toArray();
      cellValues[i] = cellValue;
      if (String(headerValue) === "Significancy") {
        for (var y = 0; y < cellValue.length; y++) {
          colorsarray[y] = cellValue[y] === "False" ? 'rgba(250, 0, 0, 0.8)' : 
                           cellValue[y] === "True" ? '(rgb(0,128,0)': 'rgb(225, 225, 225)';
        }
      }
      colors = [colorsarray]
    }
    
    for ( i = 0; i < length; i++){
       plotlyData= [{
        type: 'table',
        header: {
          values: headerValues,
          align: "center",
          line: {width: 1, color: 'rgb(50, 50, 50)'},
          fill: {color: ['rgb(0, 66, 188)']},
          font: {family: "Arial", size: 14, color: "white"}
        },
        cells: {
          values: cellValues,
          align: ["center", "center"],
          line: {color: "black", width: 1},
          fill: {color: colors},
          font: {family: "Arial", size: 11, color: ["black"]}
        },
        
      }]
      console.log(plotlyData); 
    }
    
    let plotlyLayout: Partial<Plotly.Layout> = {}
    return <Plot data={plotlyData} layout={plotlyLayout} />;
  };
    
