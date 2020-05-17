import { expect } from "chai"
class Page {

    get IF1(){
      return $('[name="fromValue"]');
    }

     get IF2(){
      return $('[name="toValue"]');
    }

    get numBtnList(){
      return $$('//div[@class="IncrementButton"]//button');
    }

   insertInputValuesMethod() {
       this.IF1.setValue(input1);
       this.IF2.setValue(input2);
       expect(this.IF1.getAttribute('value')).eq(input1.toString());
       expect(this.IF2.getAttribute('value')).eq(input2.toString());
   }

} export default new Page();

const input1 = 10;
const input2 = 20;