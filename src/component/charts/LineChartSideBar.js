import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
// import data from './newJson'
import AxesL from './AxesL'
import Line from './Line'
class LineChartSideBar extends Component {
  constructor() {
    super()
    this.state={
      data:[]
    }
    this.xScale = scaleLinear()
    this.yScale = scaleLinear()
    this.changeViewData=this.changeViewData.bind(this)
}    
    
    changeViewData(arr){
    let years=Object.keys(arr)
    let values=Object.values(arr)
    
      console.log(values)
     let empty_arr=[]
     years.map(function(v){
       let obj={}
       obj['date']=v
       empty_arr.push(obj)
     })
     let dat=[]
     values.map(function(v,i){
            let n=empty_arr[i]
            n['y']=v
            dat.push(n)
     })
      this.setState=({
       data: dat
     })
    }
    
    
    render() {
        let data = {"1895":"62.33","1896":"65.07","1897":"64.41","1898":"63.88","1899":"64.00","1900":"64.79","1901":"65.03","1902":"65.35","1903":"62.66","1904":"64.73","1905":"63.18","1906":"63.59","1907":"65.62","1908":"64.99","1909":"65.38","1910":"65.40","1911":"65.76","1912":"63.13","1913":"63.23","1914":"63.66","1915":"63.78","1916":"65.28","1917":"64.32","1918":"64.47","1919":"63.32","1920":"63.76","1921":"66.45","1922":"65.33","1923":"64.44","1924":"63.59","1925":"65.53","1926":"63.97","1927":"66.38","1928":"64.52","1929":"63.96","1930":"64.17","1931":"64.72","1932":"63.88","1933":"66.58","1934":"66.52","1935":"64.98","1936":"64.13","1937":"64.51","1938":"65.89","1939":"65.70","1940":"63.52","1941":"64.11","1942":"63.94","1943":"64.67","1944":"64.41","1945":"65.07","1946":"65.68","1947":"64.03","1948":"64.64","1949":"64.23","1950":"65.37","1951":"65.27","1952":"64.98","1953":"65.80","1954":"66.61","1955":"65.22","1956":"65.97","1957":"64.61","1958":"63.42","1959":"63.70","1960":"63.66","1961":"63.44","1962":"65.14","1963":"65.20","1964":"64.67","1965":"65.09","1966":"63.48","1967":"64.87","1968":"63.11","1969":"64.53","1970":"63.73","1971":"64.92","1972":"64.43","1973":"63.72","1974":"64.52","1975":"63.77","1976":"62.82","1977":"65.28","1978":"63.77","1979":"62.88","1980":"64.98","1981":"64.98","1982":"64.65","1983":"63.38","1984":"64.78","1985":"64.37","1986":"65.52","1987":"63.81","1988":"64.33","1989":"64.27","1990":"65.61","1991":"64.76","1992":"64.39","1993":"64.08","1994":"65.58","1995":"65.22","1996":"65.44","1997":"63.93","1998":"67.02","1999":"66.61","2000":"66.48","2001":"65.70","2002":"65.02","2003":"65.50","2004":"65.24","2005":"65.97","2006":"67.12","2007":"64.84","2008":"65.53","2009":"65.76","2010":"65.10","2011":"67.34","2012":"67.77","2013":"65.11","2014":"64.85","2015":"65.80","2016":"67.15","2017":"67.32","2018":"66.04"}
        
      data = this.changeViewData(data);
      console.log(this.setState)
        let margins = {top: 20, right: 30, bottom: 30, left: 40}
        const svgDimensions = { width: 500, height: 400}
        const max = d3.max(this.setState.data, d => Math.abs(d.y))
        const min= d3.min(this.setState.data, d => Math.abs(d.y))
        // console.log(d3.extent(this.props.data, d => d.date))
        console.log(max)
        console.log(min)
        const xScale = this.xScale
                 .domain(d3.extent(this.setState.data, d => d.date))
                 .range([margins.left, svgDimensions.width -margins.right])
        const yScale = this.yScale
                 .domain([min, d3.max(this.setState.data, d => d.y)]).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])
   
        return (
        
          <svg  width={svgDimensions.width} height={svgDimensions.height}>
          <AxesL
          
    scales={{ xScale, yScale }}
    margins={margins}
    svgDimensions={svgDimensions}
  />
         <Line scales={{ xScale, yScale }}
   svgDimensions={svgDimensions}
   margins={margins}
   maxValue={max}
          minValue={min}
           data={this.setState.data} />
           </svg>
 
        );
    // } else {
    //     return <div />;
    //   }
      }
    
}
export default LineChartSideBar;