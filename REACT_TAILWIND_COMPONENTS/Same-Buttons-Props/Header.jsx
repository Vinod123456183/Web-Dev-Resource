// yahan NavLink k andar Buttons Ko rakha h and Props se Buttons Ko Paas Kiya h

      import Button from './Button'

          <NavLink to="#" className="">
            <Button
              text="DashBoard"
              outLined={true} // Pass props directly to Button component
              onClick={() => console.log('DashBoard clicked')} // Added onClick handler
            />
          </NavLink>

          <NavLink to="#" className="">
            <Button
              text="Share"
              outLined={false}
              onClick={() => console.log('Share clicked')}
            />
          </NavLink>
