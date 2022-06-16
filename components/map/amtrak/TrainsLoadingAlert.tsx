import Alert from '../../trainsitionAlert'

interface TrainsLoadingAlertProps {
  setLoadingInfo: (loadingInfo: boolean) => void
  loadingInfo: boolean
}

const TrainsLoadingAlert = (props: TrainsLoadingAlertProps) => {
  const { setLoadingInfo, loadingInfo } = props
  return (
    <Alert
      className=" fixed top-0 left-0 z-20 m-3"
      direction="right"
      onClose={() => setLoadingInfo(false)}
      open={loadingInfo}
      severity="info"
    >
      Loading Trains
    </Alert>
  )
}

export default TrainsLoadingAlert