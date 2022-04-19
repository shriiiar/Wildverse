import React from 'react';
import Helmet from 'react-helmet';

const HelmetTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - WildVerse</title>
        </Helmet>
    );
};

export default HelmetTitle;