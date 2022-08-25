import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import propTypes from 'prop-types';

function StyledButton(props) {
    const { buttonText, iconName, color } = props;
    return (
        <div>
            <Button color={color}>
                <Button.Content visible>{buttonText}</Button.Content>
                {/* <Button.Content hidden>
                    <Icon name={iconName} />
                </Button.Content> */}
            </Button>
        </div>
    );
}

StyledButton.propTypes = {
    buttonText: propTypes.string,
    iconName: propTypes.string,
    color: propTypes.string,
};

export default StyledButton;
