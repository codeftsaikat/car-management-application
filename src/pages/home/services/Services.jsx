import Service from "./service/Service";
import useService from "../../../hooks/useService";

const Services = () => {
  const services = useService();

  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://car-management-server.onrender.com/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-orange-600">Services</h2>
        <h2 className="text-3xl text-gray-400 font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
