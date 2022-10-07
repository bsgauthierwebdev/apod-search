import React, {useState, useEffect} from 'react';
import config from './config';

const SingleDate = () => {
    const [image, setImage] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const searchSingleImage = async (date) => {
        const response = await fetch(`${config.API_URL}?api_key=${config.API_KEY}&date=${selectedYear}-${selectedMonth}-${selectedDay}`);
        const data = await response.json();
        console.log(`Searching for image on ${date}`);
        console.log(`Searching for image from ${selectedMonth}/${selectedDay}/${selectedYear}`)

        setImage(data);
    }

    return (
        <>
            <div className = 'single-date-select'>
                <h2>See a Single Image</h2>
                <span style = {{display: 'flex', gap: '1rem'}}>
                    <p>Year</p>
                    <select 
                        placeholder = 'year'
                        onChange = {(e) => {
                            const chosenYear = e.target.value;
                            setSelectedYear(chosenYear);
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
                    {selectedYear}
                    
                    <p>Month</p>
                    <select onChange = {(e) => {
                            const chosenMonth = e.target.value;
                            setSelectedMonth(chosenMonth);
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
                    {selectedMonth}

                    <p>Day</p>
                    <select onChange = {(e) => {
                        const chosenDay = e.target.value;
                        setSelectedDay(chosenDay);
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
                    {selectedDay}
                </span>
            </div>
            <div className = 'button'>
                <button
                    onClick = {() => searchSingleImage(selectedYear, selectedMonth, selectedDay)}
                >Search</button>
            </div>
            <hr />

            <div className = 'imageDisplay'>
                <div className = 'single-image'>
                    <div className = 'single-img'>
                        <img 
                            src = {image.url}
                            alt = {image.title}
                        />
                    </div>
                    <div className = 'single-date'>
                        <p>{image.date}</p>
                        <div className = 'single-title'>
                            <h3>{image.title}</h3>
                        </div>
                        <div className = 'single-explanation'>
                            <p>{image.explanation}</p>
                        </div>
                        <div className = 'single-copyright'>
                            <p>Copyright: {image.copyright}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleDate;