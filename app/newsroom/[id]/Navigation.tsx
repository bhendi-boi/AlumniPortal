'use client';
import { ComponentProps, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = ({ id, maxId }: { id: number; maxId: number }) => {
  return (
    <div className="flex items-center justify-between border-b border-background px-8 py-4">
      <Button
        title="Go to previous article"
        disabled={id === 1}
        action="decrement"
        currentId={id}
      >
        Previous
      </Button>
      <Button
        title="Go to next article"
        disabled={id === maxId}
        action="increment"
        currentId={id}
      >
        Next
      </Button>
    </div>
  );
};

export default Navigation;

function Button({
  children,
  currentId,
  action,
  ...rest
}: {
  children: ReactNode;
  currentId: number;
  action: 'increment' | 'decrement';
} & ComponentProps<'button'>) {
  const router = useRouter();

  function handleClick(action: 'increment' | 'decrement') {
    let newId = currentId;
    if (action === 'increment') {
      newId++;
    } else {
      newId--;
    }
    router.replace(newId.toString());
  }
  return (
    <button
      type="button"
      {...rest}
      onClick={() => handleClick(action)}
      className="font-medium underline disabled:cursor-no-drop disabled:text-secondary-text disabled:no-underline"
    >
      {children}
    </button>
  );
}
