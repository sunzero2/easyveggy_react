import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        { tit: 'GRAIN/곡식', sub: '쌀, 보리, 밀, 옥수수, 귀리, 기장, 오트밀, 검은콩, 참깨...' },
        { tit: 'MEAT/육류', sub: '소, 돼지, 양, 염소, 토끼...' },
        { tit: 'VEGETABLE/채소', sub: '토마토, 케일, 샐러리, 아스파라거스, 가지, 고추, 오이, 시금치, 바질, 비트...' },
        { tit: 'FISH/어류', sub: '갈치, 고등어, 광어, 연어, 참치, 도미, 민어, 멸치, 장어, 송어...' },
        { tit: 'Fungus/균류', sub: '느타리, 팽이, 새송이, 양송이, 표고, 목이, 석이, 송로, 트러플...' },
        { tit: 'Poultry/가금류', sub: '닭, 오리, 칠면조...' },
        { tit: 'Seaweed/해조류', sub: '다시마, 톳, 모자반, 미역, 청각, 파래, 매생이, 김, 우뭇가사리...' },
        { tit: 'Fruits/열매류', sub: '바나나, 사과, 복숭아, 포도, 딸기, 자두, 망고, 무화과, 귤...' },
        { tit: 'Crustacean/갑각류', sub: '꽃게, 새우, 바다가재, 가재, 게...' },
        { tit: 'EGGS/난류', sub: '계란, 성게알, 청어알, 캐비어, 명란...' },
        { tit: 'Oil/유지류', sub: '마요네즈, 땅콩버터, 마가린, 버터, 식물성유, 동물성유, 올리브유...' },
        { tit: 'Muscles/조개류', sub: '가리비, 굴, 모시조개, 소라, 전복, 홍합, 소라, 우렁, 전복...' },
        { tit: 'Dairy/유제품', sub: '크림, 치즈, 우유, 요구르트, 플레인, 연유, 아이스크림...' },
        { tit: 'Mollusks/연체류', sub: '낙지, 문어, 오징어, 주꾸미, 꼴뚜기, 해삼, 해파리...' },
        { tit: 'Bakery/베이커리', sub: '비건을 위한 베이커리' },
        { tit: 'Beverage/음료', sub: '커피,차,건강주스,착즙주스,소다...' },
      ]
    }
  }

  render() {
    let _cards = [];

    for (const key in this.state.ingredients) {
      if (Object.hasOwnProperty.call(this.state.ingredients, key)) {
        const element = this.state.ingredients[key];
        _cards.push(<Ingredient title={element.tit} sub={element.sub} key={key} id={key} />);
      }
    }

    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">at Your choice!</h2>
            <h3 className="section-subheading text-muted">PICK ANY "THREE" CARDS YOU LIKE</h3>
          </div>
          <div className="row text-center">
            {_cards}
          </div>
          <div className="leval">
            <button type="button" className="btn btn-fill btn-outline-warning">선택초기화</button>
            <button type="button" className="btn btn-fill btn-outline-danger">선택 완료</button>
          </div>
        </div>
      </section>
    )
  }
}

{/* <button type="button" className="btn btn-fill btn-outline-warning" onClick="clearAll();">선택초기화</button>
<button type="button" className="btn btn-fill btn-outline-danger" onClick="choose();">선택 완료</button> */}

export default IngredientCard;