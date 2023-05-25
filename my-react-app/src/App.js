
import Customer from './components/Customer';
import './App.css';


const customers = [
    {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍홍길동동',
    'birthday':'111111',
    'gender':'남자자',
    'job':'대학생'

  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'길홍홍동',
    'birthday':'222222',
    'gender':'남자자',
    'job':'대학생생'

  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'동길홍',
    'birthday':'333333',
    'gender':'남자',
    'job':'대학생'

  }

]
function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
