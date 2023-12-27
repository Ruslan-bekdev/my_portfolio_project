import React, {Component} from 'react';
import Button from "../../compnents/universal/UI/buttons/Button";
import Wall from "../../compnents/universal/UI/wall/Wall";

class ClassPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textVisible: true,
            count: 0,
        };
        this.toggleTextVisibility = this.toggleTextVisibility.bind(this);
        this.handleCount = this.handleCount.bind(this);
    }
    componentDidMount() {
        console.log('Компонент загружен');
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('Компонент обновлен');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.state.count);
        return this.state.count<10;
    }

    toggleTextVisibility() {
        this.setState(prev => ({textVisible: !prev.textVisible}));
    };
    handleCount() {
        this.setState(prev => ({count: prev.count+1}));
    };

    render() {
        const {textVisible} = this.state;
        return (
            <div className='container'>
                <h1>Страница из классового компонента</h1>
                <Button
                    func={this.toggleTextVisibility}
                    children={textVisible ? 'Скрыть текст' : 'Показать текст'}
                />
                {textVisible && <p>Рендеринг остановится когда число ниже дойдет до 10</p>}
                <Wall value={'='} count={'10'}/>
                <p>{this.state.count}</p>
                <Button
                    func={this.handleCount}
                    children={'+'}
                />
            </div>
        );
    }
}

export default ClassPage;