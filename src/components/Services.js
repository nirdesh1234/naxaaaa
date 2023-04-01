import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./services.css";
import { fetchServices } from './actions'

const Services = () => {
  const dispatch = useDispatch()
  const services = useSelector(state => state.services)

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Services


const Addservice = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Software & Apps Development", completed: true },
    { id: 7825, name: "Gis mapping and analysis", completed: false },
    { id: 8391, name: "Data collection and visualization", completed: false }
  ]);

  const [show, setShow] = useState(true);

  const styles = {
    color: show ? "#3D8361" : "#be3434",
    border: "2px solid",
    borderColor: show ? "#3D8361" : "#be3434",
    borderRadius: "5px",
    fontSize: "28px",
    padding: "20px"
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <section className='tasklist'>
      <h1 style={styles}>Task List</h1>
      <ul>
        <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        {show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Offer Notification</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Cookie Notification</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</p>
      </BoxCard>
    </section>
  )
}

export default TaskList;
