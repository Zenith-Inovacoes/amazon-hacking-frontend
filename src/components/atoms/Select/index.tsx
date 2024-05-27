import * as SelectPrimitive from '@radix-ui/react-select';
import { Ref, forwardRef } from 'react';
import SelectProps, { SelectItemProps } from './types';
import { cn } from '@/services/utils/className.utils';
import { IoIosArrowDown } from 'react-icons/io';

const Select = forwardRef(
  (
    { placeholder, children, variant = 'dark', ...props }: SelectProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          ref={ref}
          className={cn(
            'flex w-full z-[60] justify-between gap-4 px-4 py-3 items-center hover:bg-neutrals-300 hover:rounded-[10px] transition-all group border-b font-bold text-base leading-4 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-primary-100 data-[state=open]:bg-primary-100 data-[state=open]:rounded-[10px] data-[state=open]:border-transparent data-[state=open]:text-white',
            {
              'text-white border-white hover:text-black': variant === 'light',
              'border-black text-black': variant === 'dark',
            }
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder}/>
          <SelectPrimitive.Icon
            asChild
            className="group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 transition-transform"
          >
            <IoIosArrowDown size={24} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="bg-white z-50 w-[var(--radix-select-trigger-width)] relative border rounded-bl-lg rounded-br-lg border-black border-t-0 has-[:hover]:border-neutrals-300 has-[:active]:border-neutrals-400 transition-colors before:h-3 before:bg-white before:border before:border-black before:border-b-0 before:absolute before:w-[calc(var(--radix-select-trigger-width)-.5px)] before:top-0 before:left-0 before:-translate-y-full has-[:hover]:before:bg-neutrals-300 before:transition-colors before:-translate-x-[.5px] has-[:hover]:before:border-neutrals-300 has-[:active]:before:bg-neutrals-400 has-[:active]:before:border-neutrals-400 has-[:focus-visible]:before:bg-neutrals-300 has-[:focus-visible]:border-neutrals-300 has-[:focus-visible]:before:border-neutrals-300"
            position="popper"
          >
            <SelectPrimitive.Viewport className="overflow-hidden rounded-bl-lg rounded-br-lg">
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

export const SelectItem = forwardRef(
  (
    { className, children, ...props }: SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <SelectPrimitive.Item
        ref={ref}
        className={cn(
          'text-black cursor-default font-bold bg-white leading-4 px-4 py-3 text-base hover:bg-neutrals-300 active:bg-neutrals-400 focus-visible:bg-neutrals-300 focus-visible:outline-none transition-colors data-[state=checked]:hidden data-[state=checked]:absolute data-[state=checked]:opacity-0',
          className
        )}
        {...props}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

Select.displayName = 'Select';

export default Select;
