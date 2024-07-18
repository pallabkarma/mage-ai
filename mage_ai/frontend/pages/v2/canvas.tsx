import Route from '@components/v2/Route';
import dynamic from 'next/dynamic';

function CanvasPage() {
  const PipelineBuilder = dynamic(() => import('@components/v2/Builder'), {
    ssr: false,
  });

  return <PipelineBuilder />;
}

CanvasPage.getInitialProps = async () => ({});

export default Route(CanvasPage);
