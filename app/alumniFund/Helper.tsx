'use client';

import { MdContentCopy } from 'react-icons/md';
import { copyToClipboard } from './copyToClipboard';

const Helper = () => {
  return (
    <div className="flex items-center gap-4 pb-4 text-xl">
      <h2 className="font-medium">UPI Id:</h2>
      <p>projectaccounts@sbi</p>
      <Button
        title="Copy to Clipboard"
        onClick={(e: React.MouseEvent) => {
          copyToClipboard('projectaccounts@sbi');
        }}
      >
        <MdContentCopy size={24} />
      </Button>
    </div>
  );
};

export default Helper;

function Button({ children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className="rounded-full p-2 transition-colors hover:bg-zinc-200 hover:text-black active:bg-zinc-100 active:text-black"
    >
      {children}
    </button>
  );
}
