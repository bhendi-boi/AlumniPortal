'use client';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = ({ id }: { id: number }) => {
  return (
    <div className="flex items-center justify-between border-b border-background px-8 py-4">
      <Button disabled={id == 0} action="decrement" currentId={id}>
        Previous
      </Button>
      // ! TODO add constraints
      <Button disabled={false} action="increment" currentId={id}>
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
  disabled,
}: {
  children: ReactNode;
  currentId: number;
  action: 'increment' | 'decrement';
  disabled: boolean;
}) {
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
      disabled={disabled}
      onClick={() => handleClick(action)}
      className="font-medium underline disabled:cursor-no-drop disabled:text-secondary-text disabled:no-underline"
    >
      {children}
    </button>
  );
}
