import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import propTypes from 'prop-types';

function StyledButton(props) {
    const { buttonText, iconName, color, onClick } = props;
    return (
        <div>
            <Button size="massive" onClick={onClick} color={color}>
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
    onClick: propTypes.func,
};

export default StyledButton;
