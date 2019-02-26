var award = {
  info: function (){
    this.age=+prompt('Ваш возраст?','');
    this.name=prompt('ФИО?','');
    this.salary=+prompt('Ваш оклад?','');
    this.experience=+prompt('Ваш опыт работы?','');
    
  },

  award: function(){
    if((this.age >= 18 && this.age <= 21)&& this.experience>=5){
      alert( 'Вы соврали. Вам начисляется штраф в размере 3%' );
      return this.salary-(this.salary/100*3);  
    }  
      else if (this.age>=50&&(this.experience>=5&&this.experience<10)){
        return (this.salary+(this.salary/100*10))+(this.salary/100*5);
      }
        else if(this.age>=50&&(this.experience>=10&&this.experience<15)){
          return (this.salary+(this.salary/100*10))+(this.salary/100*10);
        }
          else if(this.age>=50&&(this.experience>=15&&this.experience<20)){
          return (this.salary+(this.salary/100*10))+(this.salary/100*15);
          }
            else if(this.age>=50&&this.experience>=20){
              return (this.salary+(this.salary/100*10))+(this.salary/100*20);
            }
              else if (this.age<50&&(this.experience>=5&&this.experience<10)){
                return (this.salary+(this.salary/100*5));
              }
                else if(this.age<50&&(this.experience>=10&&this.experience<15)){
                  return (this.salary+(this.salary/100*10));
                }
                  else if(this.age<50&&(this.experience>=15&&this.experience<20)){
                  return (this.salary+(this.salary/100*15));
                  }
                    else if(this.age<50&&this.experience>=20){
                      return (this.salary+(this.salary/100*20));
                    }
                        else if(this.age >= 18 && this.age <= 21){
                          return this.salary+(this.salary/100*13);
                        }
                          
  }

};
award.info();
alert('Ваша заработная плата ' + award.name + ' составляет ' + award.award());
