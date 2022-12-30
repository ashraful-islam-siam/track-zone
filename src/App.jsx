import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useClock"

const App = () => {
  useClock("Local Clock");
  useClock("EST Clock", "EST");
  useClock("PST Clock", "PST");
  useClock("UTC Clock", "UTC", -5*60);
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  )
}

export default App