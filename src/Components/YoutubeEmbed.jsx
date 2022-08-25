import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IframeContainer = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`;

function YoutubeEmbed({ embedId }) {
    return (
        <IframeContainer>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </IframeContainer>
    );
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
