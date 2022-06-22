import React, {useState, useEffect} from 'react';
import ImageCard from './ImageCard';
import config from './config';

const MultipleDates = () => {

    const [images, setImages] = useState([]);
    const [startMonth, setStartMonth] = useState('');
    const [startDay, setStartDay] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endDay, setEndDay] = useState('');
    const [endYear, setEndYear] = useState('');

    const searchMultipleImages = async (startDay, startMonth, startYear, endDay, endMonth, endYear) => {
        const response = await fetch(`${config.API_URL}?api_key=${config.API_KEY}&start_date=${startYear}-${startMonth}-${startDay}&end_date=${endYear}-${endMonth}-${endDay}`);
        const data = await response.json();

        console.log(data);

        setImages (data);
    }

    useEffect(() => {
        searchMultipleImages(startDay, startMonth, startYear, endDay, endMonth, endYear)
    }, []);

    return (
        <>
            <div className = 'multiple-date-select'>
                <h2>See Images Within a Date Range</h2>
                <span style = {{display: 'flex', gap: '1rem'}}>
                    <p>Start Month</p>
                    <select onChange = {(e) => {
                            const chosenStartMonth = e.target.value;
                            setStartMonth(chosenStartMonth);
                        }}>
                        <option value = 'null'>Month</option>
                        <option value = '01'>January</option>
                        <option value = '02'>February</option>
                        <option value = '03'>March</option>
                        <option value = '04'>April</option>
                        <option value = '05'>May</option>
                        <option value = '06'>June</option>
                        <option value = '07'>July</option>
                        <option value = '08'>August</option>
                        <option value = '09'>September</option>
                        <option value = '10'>October</option>
                        <option value = '11'>November</option>
                        <option value = '12'>December</option>
                    </select>
                    {startMonth}

                    <p>Start Day</p>
                    <select onChange = {(e) => {
                        const chosenStartDay = e.target.value;
                        setStartDay(chosenStartDay);
                    }}>
                        <option value = 'null'>Day</option>
                        <option value = '01'>1</option>
                        <option value = '02'>2</option>
                        <option value = '03'>3</option>
                        <option value = '04'>4</option>
                        <option value = '05'>5</option>
                        <option value = '06'>6</option>
                        <option value = '07'>7</option>
                        <option value = '08'>8</option>
                        <option value = '09'>9</option>
                        <option value = '10'>10</option>
                        <option value = '11'>11</option>
                        <option value = '12'>12</option>
                        <option value = '13'>13</option>
                        <option value = '14'>14</option>
                        <option value = '15'>15</option>
                        <option value = '16'>16</option>
                        <option value = '17'>17</option>
                        <option value = '18'>18</option>
                        <option value = '19'>19</option>
                        <option value = '20'>20</option>
                        <option value = '21'>21</option>
                        <option value = '22'>22</option>
                        <option value = '23'>23</option>
                        <option value = '24'>24</option>
                        <option value = '25'>25</option>
                        <option value = '26'>26</option>
                        <option value = '27'>27</option>
                        <option value = '28'>28</option>
                        <option value = '29'>29</option>
                        <option value = '30'>30</option>
                        <option value = '31'>31</option>
                    </select>
                    {startDay}

                    <p>Start Year</p>
                    <select 
                        placeholder = 'year'
                        onChange = {(e) => {
                            const chosenStartYear = e.target.value;
                            setStartYear(chosenStartYear);
                    }}>
                        <option value = 'null'>Year</option>
                        <option value = '1995'>1995</option>
                        <option value = '1996'>1996</option>
                        <option value = '1997'>1997</option>
                        <option value = '1998'>1998</option>
                        <option value = '1999'>1999</option>
                        <option value = '2000'>2000</option>
                        <option value = '2001'>2001</option>
                        <option value = '2002'>2002</option>
                        <option value = '2003'>2003</option>
                        <option value = '2004'>2004</option>
                        <option value = '2005'>2005</option>
                        <option value = '2006'>2006</option>
                        <option value = '2007'>2007</option>
                        <option value = '2008'>2008</option>
                        <option value = '2009'>2009</option>
                        <option value = '2010'>2010</option>
                        <option value = '2011'>2011</option>
                        <option value = '2012'>2012</option>
                        <option value = '2013'>2013</option>
                        <option value = '2014'>2014</option>
                        <option value = '2015'>2015</option>
                        <option value = '2016'>2016</option>
                        <option value = '2017'>2017</option>
                        <option value = '2018'>2018</option>
                        <option value = '2019'>2019</option>
                        <option value = '2020'>2020</option>
                        <option value = '2021'>2021</option>
                        <option value = '2022'>2022</option>
                    </select>
                    {startYear}
                </span>

                <span style = {{display: 'flex', gap: '1rem'}}>
                    <p>End Month</p>
                    <select onChange = {(e) => {
                            const chosenEndMonth = e.target.value;
                            setEndMonth(chosenEndMonth);
                        }}>
                        <option value = 'null'>Month</option>
                        <option value = '01'>January</option>
                        <option value = '02'>February</option>
                        <option value = '03'>March</option>
                        <option value = '04'>April</option>
                        <option value = '05'>May</option>
                        <option value = '06'>June</option>
                        <option value = '07'>July</option>
                        <option value = '08'>August</option>
                        <option value = '09'>September</option>
                        <option value = '10'>October</option>
                        <option value = '11'>November</option>
                        <option value = '12'>December</option>
                    </select>
                    {endMonth}

                    <p>End Day</p>
                    <select onChange = {(e) => {
                        const chosenEndDay = e.target.value;
                        setEndDay(chosenEndDay);
                    }}>
                        <option value = 'null'>Day</option>
                        <option value = '01'>1</option>
                        <option value = '02'>2</option>
                        <option value = '03'>3</option>
                        <option value = '04'>4</option>
                        <option value = '05'>5</option>
                        <option value = '06'>6</option>
                        <option value = '07'>7</option>
                        <option value = '08'>8</option>
                        <option value = '09'>9</option>
                        <option value = '10'>10</option>
                        <option value = '11'>11</option>
                        <option value = '12'>12</option>
                        <option value = '13'>13</option>
                        <option value = '14'>14</option>
                        <option value = '15'>15</option>
                        <option value = '16'>16</option>
                        <option value = '17'>17</option>
                        <option value = '18'>18</option>
                        <option value = '19'>19</option>
                        <option value = '20'>20</option>
                        <option value = '21'>21</option>
                        <option value = '22'>22</option>
                        <option value = '23'>23</option>
                        <option value = '24'>24</option>
                        <option value = '25'>25</option>
                        <option value = '26'>26</option>
                        <option value = '27'>27</option>
                        <option value = '28'>28</option>
                        <option value = '29'>29</option>
                        <option value = '30'>30</option>
                        <option value = '31'>31</option>
                    </select>
                    {endDay}

                    <p>End Year</p>
                    <select 
                        placeholder = 'year'
                        onChange = {(e) => {
                            const chosenEndYear = e.target.value;
                            setEndYear(chosenEndYear);
                    }}>
                        <option value = 'null'>Year</option>
                        <option value = '1995'>1995</option>
                        <option value = '1996'>1996</option>
                        <option value = '1997'>1997</option>
                        <option value = '1998'>1998</option>
                        <option value = '1999'>1999</option>
                        <option value = '2000'>2000</option>
                        <option value = '2001'>2001</option>
                        <option value = '2002'>2002</option>
                        <option value = '2003'>2003</option>
                        <option value = '2004'>2004</option>
                        <option value = '2005'>2005</option>
                        <option value = '2006'>2006</option>
                        <option value = '2007'>2007</option>
                        <option value = '2008'>2008</option>
                        <option value = '2009'>2009</option>
                        <option value = '2010'>2010</option>
                        <option value = '2011'>2011</option>
                        <option value = '2012'>2012</option>
                        <option value = '2013'>2013</option>
                        <option value = '2014'>2014</option>
                        <option value = '2015'>2015</option>
                        <option value = '2016'>2016</option>
                        <option value = '2017'>2017</option>
                        <option value = '2018'>2018</option>
                        <option value = '2019'>2019</option>
                        <option value = '2020'>2020</option>
                        <option value = '2021'>2021</option>
                        <option value = '2022'>2022</option>
                    </select>
                    {endYear}
                </span>
            </div>
            <div className = 'button'>
                <button
                    onClick = {() => searchMultipleImages(startDay, startMonth, startYear, endDay, endMonth, endYear)}
                >See Your Image</button>
            </div>
            <hr />

            {images?.length > 0
                ? (
                    <div className = 'container'>
                        {images.map((image) => (
                            <ImageCard 
                                image = {image}
                                key = {image.date}
                            />
                        ))}
                    </div>
                ) : (
                    <div className = 'empty'>
                        <h2>No images found</h2>
                    </div>
                )}
        </>
    )
}

export default MultipleDates;