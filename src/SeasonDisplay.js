import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (2 < month && month < 9) {
        return lat < 0 ? 'winter' : 'summer';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())

    // var isWinter = season === 'winter';
    // const winterText = isWinter ? 'Burr, it is chilly' : ';
    // const iconName = isWinter ? 'snowflake' : 'sun';

    // https://learn.javascript.ru/destructuring-assignment
    const {text, iconName} = seasonConfig[season];
    // let {text, ...rest} = seasonConfig[season];

    return (
        <div>
            <i className={`${iconName} icon`}/>
            <h1>
                {text}
            </h1>
            <i className={`${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;


//