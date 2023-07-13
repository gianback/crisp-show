import { FC } from 'react'

interface MenuIconProps {
   isActive?: boolean
   type?: string
}

export const MenuIcon: FC<MenuIconProps> = ({ isActive = false, type = 'hamburguer' }) => {
   return (
      <div  className={`menu-icon ${type} ${isActive ? 'change' : null}`}>
         <span></span>
         <span></span>
         <span></span>
      </div>
   )
}