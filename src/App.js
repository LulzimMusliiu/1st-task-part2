import logo from './logo.svg';
import './App.scss';
import Card from './Card';

const cards = [
  {
    "id": 1,
    "first_name": "Zora",
    "last_name": "Frizell",
    "avatar": "https://i.ibb.co/tD3vvT5/Avatar-18.png",
    "date": "5/1/2022",
    "version": "8.15",
    "status": "Fix",
    "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
  },
  {
    "id": 2,
    "first_name": "Urbain",
    "last_name": "Rockhill",
    "avatar": "https://i.ibb.co/pQLFvTm/Avatar-28.png",
    "date": "3/4/2022",
    "version": "5.14",
    "status": "Improvement",
    "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat."
  },
  {
    "id": 3,
    "first_name": "Nappie",
    "last_name": "Plumptre",
    "avatar": "https://i.ibb.co/1sN9KvN/Avatar-16.png",
    "date": "12/13/2021",
    "version": "0.2.5",
    "status": "New",
    "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
  },
  {
    "id": 4,
    "first_name": "Terry",
    "last_name": "Dulake",
    "avatar": "https://i.ibb.co/bdpJvz0/Avatar-13.png",
    "date": "2/27/2022",
    "version": "9.87",
    "status": "Fix",
    "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
  },
  {
    "id": 5,
    "first_name": "Sydel",
    "last_name": "Coumbe",
    "avatar": "https://i.ibb.co/485S8VM/Avatar-29.png",
    "date": "11/1/2022",
    "version": "6.02",
    "status": "New",
    "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
  },
  {
    "id": 6,
    "first_name": "Alysia",
    "last_name": "Bilby",
    "avatar": "https://i.ibb.co/dLRrdsS/Avatar-17.png",
    "date": "9/19/2022",
    "version": "0.65",
    "status": "Fix",
    "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."
  },
  {
    "id": 7,
    "first_name": "Joel",
    "last_name": "Vosper",
    "avatar": "https://i.ibb.co/31BTNSg/Avatar-15.png",
    "date": "2/24/2022",
    "version": "3.8",
    "status": "New",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."
  },
  {
    "id": 8,
    "first_name": "Rhody",
    "last_name": "Tedman",
    "avatar": "https://i.ibb.co/Bn1XM5S/Avatar-34.png",
    "date": "2/28/2022",
    "version": "0.6.0",
    "status": "New",
    "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl."
  },
  {
    "id": 9,
    "first_name": "Laurene",
    "last_name": "McCormack",
    "avatar": "https://i.ibb.co/fH4mCtW/Avatar-6.png",
    "date": "12/23/2021",
    "version": "0.9.4",
    "status": "New",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
  },
  {
    "id": 10,
    "first_name": "Benjy",
    "last_name": "Aleveque",
    "avatar": "https://i.ibb.co/dLRrdsS/Avatar-17.png",
    "date": "7/14/2022",
    "version": "8.60",
    "status": "Improvement",
    "description": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
  },
  {
    "id": 11,
    "first_name": "Patton",
    "last_name": "Tallet",
    "avatar": "https://i.ibb.co/23JCs8L/Avatar-32.png",
    "date": "6/28/2022",
    "version": "5.6.4",
    "status": "New",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst."
  },
  {
    "id": 12,
    "first_name": "Arlan",
    "last_name": "Carverhill",
    "avatar": "https://i.ibb.co/xq4Mn6c/Avatar-30.png",
    "date": "12/20/2021",
    "version": "0.47",
    "status": "Improvement",
    "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."
  }]
function App() {
  return (
    <div className="second-task-wrapper">
      <div className='cardholder'>
        {cards.map(item => {
          return (
            <Card id={item.id} firstName={item.first_name} lastName={item.last_name} version={item.version} date={item.date} avatar={item.avatar} status={item.status} description={item.description} />
          )
        })}
      </div>
    </div>
  )
}

export default App;
