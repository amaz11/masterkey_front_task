import React, { useState } from 'react';
import Split from 'react-split';
import './Partition.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Partition = ({ initialColor, onRemove }) => {
  const [isSplit, setIsSplit] = useState(false);
  const [direction, setDirection] = useState('');
  const [colors, setColors] = useState([initialColor, getRandomColor()]);
  const [childKeys, setChildKeys] = useState([0, 1]);

  const handleSplit = (dir) => {
    setDirection(dir);
    setIsSplit(true);
  };

  const handleRemove = () => {
    onRemove();
  };

  if (!isSplit) {
    return (
      <div className="partition" style={{ backgroundColor: colors[0] }}>
        <div>
          <button
            className="partitionbutton"
            onClick={() => handleSplit('vertical')}
          >
            V
          </button>
          <button
            className="partitionbutton"
            onClick={() => handleSplit('horizontal')}
          >
            H
          </button>
          <button className="partitionbutton" onClick={handleRemove}>
            -
          </button>
        </div>
      </div>
    );
  }

  return (
    <Split
      direction={direction === 'horizontal' ? 'horizontal' : 'vertical'}
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: `${direction === 'horizontal' ? 'row' : 'column'}`,
      }}
      sizes={[50, 50]}
      minSize={100}
      gutterSize={10}
      gutterStyle={(dimension, index) => ({ height: '0', width: '0' })}
      snapOffset={10}
      cursor={direction === 'horizontal' ? 'col-resize' : 'row-resize'}
    >
      <Partition
        initialColor={colors[0]}
        onRemove={() => {
          setChildKeys([childKeys[1]]);
          setIsSplit(false);
        }}
      />
      <Partition
        initialColor={colors[1]}
        onRemove={() => {
          setChildKeys([childKeys[0]]);
          setIsSplit(false);
        }}
      />
    </Split>
  );
};

export default Partition;
