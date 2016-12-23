import template from './card.html';
import controller from './card.controller';

const CardComponent = {
    template,
    controller,
    bindings: {
        item: '<'
    }
};

export default CardComponent;
