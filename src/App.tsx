import styles from './App.css'

const App = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <label htmlFor='bolan'>Bolån</label>
        <input type='text' id='bolan' name="bolan" required={true} />
        <label htmlFor='sparande'>Sparande</label>
        <input type='text' id='sparande' name="bolan" required={true} />
        <label htmlFor='rante-fria-dagar'>Antal räntefriadagar</label>
        <input type='text' id='rante-fria-dagar' name="bolan" required={true} />
      </div>
    </>
  )
}

export default App
