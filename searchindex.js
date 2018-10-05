Search.setIndex({docnames:["actions","camera","camera_api","cli","configuration","contribute","controllers","controllers_api","dashboards","dashboards_api","devices/displays","devices/gpio","devices/index","devices/motors","devices/pwm","devices/sensors","display","display_api","distributed","dynamic_values_api","getstarted","getstarted/actions","getstarted/actionsx","getstarted/bigpicture","getstarted/camera","getstarted/controllers","getstarted/dashboards","getstarted/hello_world","getstarted/index","getstarted/sensors","hal","hal_devices_api","hal_gpio_api","hal_i2c_api","index","install","ipc","kervi_api","messaging","motors","multi_process","overview","security","sensors","sensors_api","service","signals","values_api"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["actions.rst","camera.rst","camera_api.rst","cli.rst","configuration.rst","contribute.rst","controllers.rst","controllers_api.rst","dashboards.rst","dashboards_api.rst","devices\\displays.rst","devices\\gpio.rst","devices\\index.rst","devices\\motors.rst","devices\\pwm.rst","devices\\sensors.rst","display.rst","display_api.rst","distributed.rst","dynamic_values_api.rst","getstarted.rst","getstarted\\actions.rst","getstarted\\actionsx.rst","getstarted\\bigpicture.rst","getstarted\\camera.rst","getstarted\\controllers.rst","getstarted\\dashboards.rst","getstarted\\hello_world.rst","getstarted\\index.rst","getstarted\\sensors.rst","hal.rst","hal_devices_api.rst","hal_gpio_api.rst","hal_i2c_api.rst","index.rst","install.rst","ipc.rst","kervi_api.rst","messaging.rst","motors.rst","multi_process.rst","overview.rst","security.rst","sensors.rst","sensors_api.rst","service.rst","signals.rst","values_api.rst"],objects:{"kervi.controllers":{controller:[7,0,0,"-"]},"kervi.controllers.controller":{Controller:[7,1,1,""]},"kervi.controllers.controller.Controller":{controller_exit:[7,2,1,""],controller_start:[7,2,1,""],create:[7,3,1,""],input:[7,3,1,""],input_changed:[7,2,1,""],link_to_dashboard:[7,2,1,""],output:[7,3,1,""]},"kervi.dashboards":{Dashboard:[9,1,1,""],DashboardPanel:[9,1,1,""],DashboardPanelGroup:[9,1,1,""]},"kervi.dashboards.Dashboard":{add_panel:[9,2,1,""]},"kervi.displays":{Display:[17,1,1,""],DisplayPage:[17,1,1,""]},"kervi.displays.Display":{activate_page:[17,2,1,""],active_page:[17,4,1,""],add_page:[17,2,1,""],controller_exit:[17,2,1,""],controller_start:[17,2,1,""],display_pages:[17,4,1,""],input_changed:[17,2,1,""]},"kervi.displays.DisplayPage":{input_changed:[17,2,1,""]},"kervi.hal":{ChannelPollingThread:[31,1,1,""],DACValueOutOfBoundsError:[31,5,1,""],DeviceChannelOutOfBoundsError:[31,5,1,""],I2CGPIODeviceDriver:[31,1,1,""],I2CaddressOutOfBoundsError:[31,5,1,""],gpio:[32,0,0,"-"],i2c:[33,0,0,"-"]},"kervi.hal.gpio":{AnalogIOChannel:[32,1,1,""],IGPIODeviceDriver:[32,1,1,""],LogicIOChannel:[32,1,1,""]},"kervi.hal.gpio.IGPIODeviceDriver":{define_as_input:[32,2,1,""],define_as_output:[32,2,1,""],define_as_pwm:[32,2,1,""],get:[32,2,1,""],listen:[32,2,1,""],listen_falling:[32,2,1,""],listen_rising:[32,2,1,""],pwm_start:[32,2,1,""],pwm_stop:[32,2,1,""],set:[32,2,1,""],set_channels:[32,2,1,""]},"kervi.hal.i2c":{II2CDeviceDriver:[33,1,1,""]},"kervi.hal.i2c.II2CDeviceDriver":{read_S16:[33,2,1,""],read_S16BE:[33,2,1,""],read_S16LE:[33,2,1,""],read_S8:[33,2,1,""],read_U16:[33,2,1,""],read_U16BE:[33,2,1,""],read_U16LE:[33,2,1,""],read_U8:[33,2,1,""],read_list:[33,2,1,""],read_raw8:[33,2,1,""],reverse_byte_order:[33,2,1,""],write16:[33,2,1,""],write8:[33,2,1,""],write_list:[33,2,1,""],write_raw8:[33,2,1,""]},"kervi.sensors":{sensor:[44,0,0,"-"]},"kervi.sensors.sensor":{Sensor:[44,1,1,""]},"kervi.sensors.sensor.Sensor":{add_value_event:[44,2,1,""],controller_start:[44,2,1,""],delta:[44,4,1,""],device:[44,4,1,""],display_unit:[44,4,1,""],link_to_dashboard:[44,2,1,""],log_values:[44,4,1,""],max:[44,4,1,""],min:[44,4,1,""],persist_value:[44,4,1,""],polling_interval:[44,4,1,""],reading_interval:[44,4,1,""],unit:[44,4,1,""]},"kervi.values":{BooleanValue:[47,1,1,""],ColorValue:[47,1,1,""],DateTimeValue:[47,1,1,""],EnumValue:[47,1,1,""],NumberValue:[47,1,1,""],StringValue:[47,1,1,""]},"kervi.values.BooleanValue":{link_to_dashboard:[47,2,1,""]},"kervi.values.ColorValue":{link_to_dashboard:[47,2,1,""],rgb:[47,4,1,""],value:[47,4,1,""]},"kervi.values.DateTimeValue":{date:[47,4,1,""],time:[47,4,1,""],value:[47,4,1,""]},"kervi.values.EnumValue":{add_option:[47,2,1,""]},"kervi.values.NumberValue":{delta:[47,4,1,""],display_unit:[47,4,1,""],link_to_dashboard:[47,2,1,""],max:[47,4,1,""],min:[47,4,1,""],type:[47,4,1,""],unit:[47,4,1,""]},"kervi.values.StringValue":{link_to_dashboard:[47,2,1,""]},"kervi.vision":{camera:[2,0,0,"-"]},"kervi.vision.camera":{CameraBase:[2,1,1,""],CameraStreamer:[2,1,1,""],FrameCameraDeviceDriver:[2,1,1,""],IPCamera:[2,1,1,""],USBCamera:[2,1,1,""]},"kervi.vision.camera.CameraBase":{fps:[2,4,1,""],framerate_changed:[2,2,1,""],height:[2,4,1,""],input_changed:[2,2,1,""],link_to_dashboard:[2,2,1,""],pan_changed:[2,2,1,""],source:[2,4,1,""],tilt_changed:[2,2,1,""],width:[2,4,1,""]},"kervi.vision.camera.CameraStreamer":{frame_captured:[2,2,1,""],get_font:[2,2,1,""]},"kervi.vision.camera.FrameCameraDeviceDriver":{capture_frames:[2,2,1,""],frame_ready:[2,2,1,""],start_record:[2,2,1,""],stop_record:[2,2,1,""],wait_next_frame:[2,2,1,""]},kervi:{dashboards:[9,0,0,"-"],displays:[17,0,0,"-"],hal:[31,0,0,"-"],values:[47,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:exception"},terms:{"02x":[30,43],"0x02":[30,43],"0x03":[30,43],"0x12":[30,43],"0x20":[10,11],"0x27":11,"0x38":11,"0x39":[14,15,30,43],"0x3c":10,"0x3f":[10,11],"0x48":11,"0x77":[15,33],"0x80":[30,43],"0x81":[30,43],"0x8c":[30,43],"0x8e":[30,43],"0xfc2b454c040010":15,"10b1":4,"15min":[19,47],"16x":30,"1f9dbc2e":4,"200px":[0,8],"250px":8,"30min":[19,47],"41d98886fae8":4,"5min":[19,47],"abstract":[2,7,17,30,31,43,44],"boolean":[10,19,44,46,47],"byte":33,"case":26,"class":[0,2,4,6,7,9,16,17,19,20,22,23,25,26,27,30,31,32,33,34,38,40,41,43,44,46,47],"default":[0,1,2,4,7,8,9,10,11,14,15,17,18,19,24,26,33,38,44,47],"float":[19,30,32,43,44,46,47],"function":[0,2,6,21,22,26,32,36,44,46],"import":[0,1,4,5,6,10,11,13,14,15,16,18,20,21,22,23,24,25,26,27,29,30,32,34,36,38,39,40,41,43,46],"int":[2,7,9,19,32,33,46,47],"long":33,"new":2,"return":[0,2,4,17,30,32,33,36,43],"static":7,"super":0,"switch":[0,8,19,21,30,32,47],"true":[0,1,2,4,8,9,10,11,14,15,17,18,19,21,22,23,24,25,26,29,30,33,34,38,39,40,41,42,43,44,47],"try":[0,30,42,43],"void":36,"while":0,And:0,For:[5,11,18,43],Not:27,One:[18,41,44],TLS:42,That:[20,22,27],The:[0,1,2,3,5,6,7,8,9,10,12,16,17,18,19,20,21,22,25,26,27,29,30,32,35,36,38,40,41,42,44,46,47],There:[0,5,10,35],Use:[2,3,7,10,19,29,45,47],Used:9,Using:18,With:[18,36],__init__:[0,6,22,23,25,26,30,36,40,41,43],__main__:[0,5,18,21,22,23,24,25,26,27,29,30,34,40,41],__name__:[0,5,18,21,22,23,24,25,26,27,29,30,34,40,41],_activ:[22,23,40,41],_calc_fan_spe:[22,23,41],_calc_spe:40,_doc:5,_stop_mov:0,a12:4,a_valu:4,abl:[0,4,8,9,18,26,35,36,45],about:[21,22,25,26,29,34,43,46],abov:[0,1,5,6,8,18,19,21,26,38,40,41,42,47],acceler:15,access:[15,30,32,38,43,44],accl_address:15,account:5,accross:46,across:[18,40],act:7,action:[16,18,23,36,40],action_id:0,action_paramet:0,activ:[2,9,17,22,23,38,40,41],activate_pag:17,active_pag:17,actual:[0,19,30,44,47],adafruit:[23,39,41],adafruit_i2c_motor_hat:[22,23,25,26,39,41],adafruitmotorhat:[6,22,23,25,26,39,41,46],adaptive_spe:46,add:[0,2,3,6,7,9,17,19,22,23,25,26,27,30,39,40,41,44,47],add_error_rang:38,add_normal_rang:38,add_opt:[19,47],add_pag:[16,17],add_panel:[9,30],add_value_ev:44,add_warning_rang:38,added:[17,44],addit:[0,42],addopt:[19,47],address:[0,5,10,11,14,15,18,20,27,30,31,33,42,43],adjust:[8,26],admin:[4,42],administr:42,advanc:6,advantag:[40,41],advis:42,affect:42,after:[4,18,36],again:[26,29],against:42,agnost:[6,41],ahead:6,ain1:11,align:[2,7],all:[0,2,4,5,7,9,10,15,21,22,25,26,34,41,42,44,45,46],all_off:6,allow:39,almost:18,also:[0,6,16,41,43],alternative_id:0,alwai:38,ambient:[30,43],analog:[8,11],analogiochannel:32,angular:5,ani:[3,9,16,20,25,26,28,34,40,42],anim:8,anonym:4,anoth:[0,1,6,18,40],anywher:0,aout:11,app:[0,1,3,4,5,6,8,10,11,13,14,15,16,18,20,21,22,23,24,25,26,27,29,30,34,36,38,39,40,41],app_cpuloadsensor:18,app_exit:[0,40],app_main:[0,40],app_modul:18,appear:27,appli:[3,41,42,43,46],applic:[0,2,4,6,7,8,9,10,11,13,14,15,16,17,20,21,22,23,24,25,26,27,29,30,32,34,35,36,38,39,40,42,44,45,46],appropri:10,apt:35,area:[1,9,19,23,41,47],arg:3,argument:[0,2,7,9,19,44,47],arrow:0,associ:44,authent:42,author:4,auto:30,autom:[8,26,29,34,41],autorang:43,avail:[2,29,40],awesom:[8,44],axes:8,axi:8,b_valu:4,background:[1,2,24,27],backlight:10,balanc:[6,46],balance_pid:46,base:[2,6,25,34,41],basic:6,batteri:[0,8],becaus:36,been:[8,23,26,36,41,42],befor:[2,5,19,44,45,47],being:[19,47],belong:42,below:[1,2,4,5,6,7,8,9,16,19,20,21,22,23,25,26,27,29,30,34,35,38,39,40,41,42,43,46,47],besid:[4,9,27,43],between:[6,19,40,42,47],big:33,bigger:[23,41],bit:[10,33],block:21,bmp085:43,bmp085_altitude_sensor:15,bmp085_highr:15,bmp085_i2caddr:15,bmp085_pressure_sensor:15,bmp085_standard:15,bmp085_temperature_sensor:15,bmp085_ultrahighr:15,bmp085_ultralowpow:15,bmp085devicedriv:[15,43],board:[1,13,30,41],board_id:13,board_nam:13,bodi:[8,9,23,26,41],bool:[0,2,7,9,19,32,44,47],booleanvalu:[0,19,47],bootstrap:[40,41],bord:13,border:27,bottom:[19,47],bounce_tim:32,boundari:[0,36,40,46],box:[7,10,16,29],bright:10,bring:41,broadcast:[3,18],broardcast:46,browser:[5,8,20,26,27,29,35,41,42],build:[5,6,16,18,23,36,41],builtin:46,bus:[10,11,14,15,30,31,33,43],busnum:[10,11],button:[0,8,11,19,30,32,47],button_icon:[0,19,47],button_text:[0,18,19,47],bytearrai:33,cach:44,calcul:[6,25,41,46],call:[2,5,7,8,17,21,22,23,25,26,32,36,40,41,43,44,46],callback:[31,32],cam1:[1,24,41,46],cam:[1,8,18,41],camera:[3,5,8,26,34,40,41],camera_id:2,camera_sourc:[1,2],camerabas:2,camerastream:[1,2,24],can:[0,1,2,3,4,6,7,8,10,16,17,18,26,29,30,32,38,41,42,45,46],capabl:[18,36],capac:[0,15],capacity_sensor:0,captur:[1,2],capture_fram:2,center:1,central:[30,41],cert:[4,42],cert_fil:[4,42],certain:[35,38,42],certif:42,chang:[0,2,5,6,7,8,16,17,18,19,23,25,26,29,30,32,41,44,46,47],change_pag:16,changeabl:46,changed_input:[0,2,6,7,17,22,23,25,26,40,41],channal:13,channel:[4,8,13,14,15,31,32,38],channelpollingthread:31,chapter:[27,29],charact:10,chart:[8,18,19,21,22,23,25,26,29,34,40,41,43,44,47],chart_button:[19,47],chart_grid:[19,47],chart_interv:[19,47],check:[30,43],chip:10,clariti:46,clean:[0,5],clear:42,cli:[4,5,45],click:26,clock:10,clone:5,close:0,code:[0,1,3,5,6,8,16,17,20,21,22,26,27,28,29,30,34,39,40,41,42,44,45,46],col:10,collaps:9,color:[19,27,47],colorvalu:[19,47],column:[9,10,30],com:[4,5,38,42],combin:[15,23],come:[3,6,11,25,30,35,41,42],command:[0,3,5,35,40,42],comment:4,common:[12,15,16,18,21,22,23,25,26,29,30,34,40,41,43],commun:[18,20,27,30,33,40,42,46],compass:15,complet:[34,41],compon:[2,7,8,9,19,26,40,41,42,47],comput:[0,6,18,25,41,46],concept:[20,23,28,38],concurr:40,condit:38,config:[18,42],configur:[3,8,34,41,42],connect:[0,1,2,3,10,13,16,21,34,40,41,46],consist:0,constructor:41,contain:[5,8,9,12,19,26,30,40,47],content:[8,17,20,27,41],control:[0,1,2,9,10,14,17,22,23,26,30,34,38,40,42,43,46],controller_exit:[7,17],controller_id:[0,6,7],controller_start:[0,7,17,44],convent:4,coordin:9,core:[20,23,28,34,36,40,46],correct:[2,7,35],could:[0,2,6,8,17,18,25,26,30,40,41,44],cpu:[3,8,16,18,22,23,25,26,29,34,38,40,41,42,43],cpu_load:[15,40],cpu_load_sensor:[21,22,26,29],cpu_pag:16,cpu_sensor:[34,40,42],cpu_temp:[8,15,16,22,23,25,26,41],cpu_temp_sensor:[22,25,26],cpu_us:[15,16,18,21,22,23,26,29,34,40,41],cpuloadsensor:[16,22,23,26,29,34,41,42],cpuloadsensordevicedriv:[15,16,18,21,22,23,26,29,34,40,41,42],cputempsensor:[16,22,23,25,26,41],cputempsensordevicedriv:[15,16,22,23,25,26,41],creat:[1,3,4,5,6,7,8,9,16,18,20,21,22,24,25,26,27,29,33,34,35,40,41,43,46],ctrl:[18,20,27,29,41],current:[17,19,44,47],cw2015:0,cw2015_capac:[0,15],cw2015_voltag:15,cw2015capacitydevicedriv:[0,15],cw2015voltagedevicedriv:15,cycl:[14,16,32],d_1:10,dacvalueoutofboundserror:31,dahsboard:9,dai:[19,47],dashboard:[1,2,3,6,7,11,19,21,22,23,24,25,29,30,34,35,39,40,42,43,44,47],dashboard_id:[2,7,9,19,44,47],dashboardpanel:[0,8,9,23,26,30,39,41,42],dashboardpanelgroup:9,data:[10,33,46],datarang:30,date:[19,47],datetim:[1,19,47],datetimevalu:[19,47],dc_motor:[0,6,8,22,23,25,26,39,41,46],debuggin:5,decor:[0,21,22,36],def:[0,6,21,22,23,25,26,30,36,40,41,43],default_channel:4,defin:[2,6,7,8,9,21,22,23,25,26,32,38,41,42],define_as_input:[0,11,21,30,32],define_as_output:[11,30,32],define_as_pwm:[14,32],degre:[0,25],delta:[19,44,47],demonstr:5,depend:[8,10,19,46,47],desktop:34,detail:[10,13,15,28,46],detect:40,dev:[1,35],develop:[34,41,42],devic:[0,1,10,11,13,14,15,16,17,18,21,22,23,25,26,29,33,34,36,38,39,40,41,44,45,46],device_driv:17,device_nam:[31,43],devicechanneloutofboundserror:31,dict:[32,46],dictionari:32,differ:[8,10,16,19,40,41,43,46,47],digit:[8,11],dimens:[15,44],dimension:44,diod:[30,43],direct:[6,39,46],directli:[4,5,30,36,42],disabl:[18,42,44],discov:18,discoveri:[3,20,27],disk:8,disk_us:15,diskusesensordevicedriv:15,displai:[0,5,7,8,12,19,30,34,41,44,47],display:[19,47],display_id:17,display_pag:17,display_unit:[0,19,44,47],displaydevicedriv:17,displaypag:[16,17],distribut:[0,36],doc:5,document:28,doe:[40,42],doesn:[8,26],don:[0,5,34],done:[0,16,30,41,46],down:0,driver:[1,2,3,10,11,12,13,15,16,17,18,20,22,25,26,27,29,30,32,34,39,41,43,44],dropdown:[7,19,47],ds18xxx:15,ds18xxxdevicedriv:15,due:40,dummi:5,dummy_motor_driv:0,dummy_sensor:38,dummymotorboard:0,dummysensordevicedriv:38,durat:0,dure:0,duti:[14,32],duty_cycl:32,dynam:[6,7,9,16,25,44],dynamc:44,dynamicnumb:[23,41],each:[5,8,9,21,26,28,32,40,41,42,44,46],easi:[6,16,24,34,40,41],easier:41,ect:30,either:[43,46],elif:[6,30,43],els:[0,22,23,25,26,30,40,41,43],email:[4,38,42],empti:[0,8],ena:13,enabl:[4,10,18,30,38,42],enable_pwm:10,enb:13,encrypt:4,end:0,endian:33,enter:[0,4,8,10,16,18,19,44,47],entir:[6,7,17,44],enumsign:[19,47],enumvalu:[19,47],error:[30,38,43,44],establish:46,event:[6,7,19,40,41,42,44,47],event_typ:44,event_valu:44,everi:0,exampl:[1,4,6,7,8,16,18,20,26,30,34,38,40,41,42,43,46],exce:0,except:[0,4,5,30,31,43],exchang:46,exe:30,execut:[0,5,21,29,40],exist:[5,30,46],exit:[3,44],expect:[0,46],expert:42,explain:28,explicit:10,expos:[5,42,44],express:[0,44,46],extend:[11,22,29,30],extens:5,extern:[0,42],factori:6,fals:[0,4,8,10,14,15,19,22,23,32,38,40,41,42,44,47],fan:[22,23,25,26,40,41],fan_control:[22,23,25,26,40,41,43],fan_spe:[22,23,25,26,40,41],fancontrol:[22,23,25,26,40,41],fanspe:[22,23,40,41],fanwood:2,far:[26,41],featur:[26,30,34,36,42],feed:[1,2],feel:[0,7,19,44,47],fetch:41,few:[16,18],field:[19,47],figur:[27,41],file:[3,4,5,18,20,27,36,40,42],file_nam:2,fill:[2,43],filter:32,finer:10,finish:[0,5],fire:[0,6,41],first:[0,8,26,27,33,41,44],five:0,flag:[2,23,41],flat:[0,7,19,44,47],flavor:11,flip:15,flip_horizont:[1,24],flip_vert:[1,24],floor:[8,26,41],flow:[27,46],fly:[8,26],folder:[5,40,41],follow:[0,1,4,6,9,27,35,40,41,44,46],font:[2,8,44],footer:44,footer_cent:9,footer_left:9,footer_right:9,format:16,found:[4,18,46],fps:[1,2],frame:[1,2,19,40,47],frame_captur:2,frame_r:[19,47],frame_readi:2,framecamera:2,framecameradevicedriv:2,framer:[2,19,47],framerate_chang:2,framework:[0,5,8,18,20,23,25,26,28,30,34,35,36,40,41,42,43,46],free:4,frequenc:[14,32],from:[0,1,2,4,5,6,7,9,10,11,13,14,15,16,17,18,20,21,22,23,24,25,26,27,29,30,32,33,34,36,38,39,40,41,42,43,44],full:[0,8,10,43],func:44,further:[10,13,15],gain:[30,43],gate:0,gate_control:0,gate_motor_spe:0,gate_spe:0,gatecontrol:0,gaug:[8,19,47],gener:[5,11,14,41],get:[4,32,35,41],get_font:2,gil:40,git:5,given:40,global:0,goe:[0,26],going:32,gpio10:14,gpio12:[21,30],gpio13:[13,30],gpio17:13,gpio22:13,gpio27:13,gpio2:0,gpio3:0,gpio4:0,gpio5:[0,13],gpio6:13,gpio:[0,5,10,12,13,14,21,22,34],gpio_devic:32,gpio_id:[31,32],grab:43,gradual:41,grap:2,greater:[21,41],green:[20,27],grid:[19,47],group:[4,9,42],group_id:9,grow:41,guag:8,gyro:15,gyro_address:15,hal:[0,5,10,13,14,17,18,21,30,31,32,33,43,44],half:[0,8],handl:[0,5,10,16,17,30,34,36,41,43,44],handler:36,hardwar:[5,6,7,10,31,34,35,41,44],hart:41,has:[0,2,7,8,9,10,16,17,26,36,40,41,42,46],hat:[23,41],have:[0,1,4,5,9,10,16,23,26,34,35,40,41,42,44],hd44780_mcp23017:10,hd44780_mcp23017_devicedriv:10,hd44780_pcf8574:10,hd44780_pcf8574_devicedriv:10,hd44780devicedriv:10,head:15,header:[0,2,7,8,19,23,26,41,44,47],header_cent:9,header_right:[0,9,18,21,22,23,26,29],heart:27,height:[2,8,10],help:[3,5],here:[0,21,22,25,26,29],hi_end_stop:0,high:[0,10,30,32,38],hold:[0,5,16,17,19,43,44,46,47],home:[8,26],hook:0,horizont:8,horizontal_gaug:[19,44,47],horizontal_linear_gaug:8,horizontal_slid:[19,47],host:5,hour:[19,47],hous:41,how:[0,1,2,5,6,8,10,13,15,16,19,26,27,29,34,39,41,44,46,47],html:[5,34],http:[5,18,20,27],http_port:4,i2c:[5,43],i2c_accl_address:15,i2c_address:10,i2c_bu:10,i2c_gyro_address:15,i2caddressoutofboundserror:31,i2cgpiodevicedriv:31,i2csensordevicedriv:43,icon:[0,7,8,19,44,47],ident:18,ignor:[0,4,9,19,47],igpiodevicedriv:32,ii2cdevicedriv:33,imag:[1,2],impact:40,implement:[2,5,7,17,30,41],improv:41,in1:13,in2:13,in3:13,in4:13,includ:[8,18,26,29],increas:[25,41],independ:[16,30],index:[5,44],indic:[23,41],indirect:[13,46],infam:40,info:[38,41],inform:[36,41,43],inherit:[17,43,44],initi:[0,2,10,13,15,17,19,30,36,46,47],initial_backlight:10,inlin:[0,18,19,44,47],input:[0,2,6,7,8,9,11,17,19,21,22,23,25,26,32,39,40,43,44,46,47],input_chang:[0,2,6,7,17,22,23,25,26,40,41],input_id:7,input_s:[19,47],input_typ:[19,47],insid:[27,46],inspir:27,instal:[30,32],instanc:[27,41],instanti:[4,6,22,25,26,27,41],instruct:35,integr:34,inter:[40,46],interact:[34,35],interfac:[5,6,30,39,41],intern:[34,42],internet:42,interprocess:[18,20,27,40],interrupt:[23,41],interrupt_en:0,interrupt_paramet:0,interv:[0,16,19,44,47],introduc:23,invert_polar:10,ioerror:[30,43],ipaddress:5,ipc:[18,20,27,40,46],ipc_root_address:[0,4,18],ipc_root_port:[4,18],ipc_secret:4,ipcamera:2,iprootaddress:5,ir_read:[30,43],is_default:[0,9,23,26,30,39,41],is_flip:15,is_input:32,its:[0,6,10,19,25,26,36,40,41,44,47],itself:[0,41],jayamann:5,jitter:32,json:4,just:[0,4,8,44],kdl:41,keep:46,kei:[4,32,42],kervi:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,38,39,40,42,44,45,46],kervi_devic:[1,23,34,41,43],kervi_ui:5,kervivalu:[2,7,17,46],key_fil:[4,42],keyboard:41,keyword:[0,2,7,9,19,44,47],kind:[8,19,21,22,36,43,47],knowledg:34,kwarg:[2,7,9,19,44,47],label:[0,7,18,19,44,47],label_icon:[0,19,44,47],lambda:[0,21,44,46],larg:[8,34],last:[40,44],later:28,layer:[5,31],layout:34,lcd:10,lean:29,least:33,ledss:14,left:[6,26],left_pad_i:[8,9],left_pad_x:[8,9],left_right_bal:6,left_spe:[0,6,46],length:33,let:[18,35],level:[3,4,5,38],libjpeg:35,librari:[10,13,15,17,29,34,41,44],light:[6,30],like:[2,5,8,9,10,18,27,29,30,35,38,40,41],likewis:40,limit:40,line:[3,4,6,10,18,20,24,26,27,40],link:[1,2,6,7,9,10,11,13,15,16,19,21,22,23,24,25,26,29,30,34,36,39,40,44,47],link_to:[0,1,6,21,22,23,25,26,40,41,43,46],link_to_dashboard:[0,1,2,6,7,8,10,11,13,14,15,16,18,19,21,22,23,24,25,26,29,30,34,38,39,40,41,43,44,47],link_to_head:[0,7,8,18,19,21,22,23,25,26,29,34,38,40,41,43,44,47],link_valu:16,lintn:5,linux:35,lipo:15,list:[0,3,7,9,45],listen:[5,18,21,32,40,41,46],listen_fal:32,listen_ris:32,listin:[18,20,27],littl:33,little_endian:33,live:40,ln298devicedriv:13,lo_end_stop:0,load:[0,3,7,9,16,17,18,20,22,26,27,29,30,32,36,38,40,41,44],local:[0,3,5,18,40,41,45],localhost:[4,5,38],locat:[4,5],lock:40,log:[4,8,9,38,44],log_valu:44,logic:[0,2,6,7,17,25,34,39,41],logiciochannel:32,login:42,look:[0,1,4,7,18,19,29,30,40,41,42,43,44,47],lot:[20,26,27,40],low:[0,10,32,38],lsm9ds0:46,lsm9ds0orientationdevicedriv:[15,46],lux:[30,43],lux_1:15,lux_sensor:30,made:[30,41],mai:[0,6,8,9,14,26,40,42,43,44,46],mail_user_nam:38,mail_user_password:38,main:[3,8,9,27,30,38,40,41],maintain:41,make:[2,5,6,7,10,16,30,34,40,46],manag:[1,6,15,17,35,43],mani:23,matter:4,max:[6,19,22,23,25,26,40,41,43,44,47],max_span:[23,41],max_temp:[23,41],maximum:[19,44,47],mayb:46,mcp23008devicedriv:11,mcp23017devicedriv:11,mcp230xx:11,measur:[15,16,23,41],mem_us:15,member:42,memori:[3,8,44],memory_us:15,memusesensordevicedriv:15,menu:[9,26],messag:[3,4,9],method:[0,2,7,8,17,32,40,41,43,44],metric:[19,44,47],min:[0,19,22,23,25,26,40,41,43,44,47],minimum:[19,44,47],mobil:[8,26,29,34],mode:[10,15,46],model:41,modul:[0,3,4,17,30,36,40,41,43,44],module_cpu_load:18,module_main:0,moment:[30,34,42],monitor:[22,23,41,44,46],month:[19,47],more:[5,6,7,8,9,21,22,25,26,29,30,34,38,40,41],most:[5,20,27,28],motor:[0,1,6,7,12,22,23,25,26,30,34,41,46],motor_board:[0,1,6,46],motor_control:[8,23,39,41],motor_driv:[13,22,25,26],motorst:[0,6,46],mount:46,move:[0,41,46],move_g:0,move_gate_interrupt:0,much:[0,19,44,46,47],multi:[5,34,36,44],multipl:[2,7,16,17,32,34,40,41],multiprocess:0,must:[2,18,27,41,46],my_act:0,my_action_interrupt:0,my_app:[3,4,20,27,45],my_app_id:18,my_command_handl:36,my_config:4,my_control:41,my_gpio_act:21,my_handl:36,my_query_handl:36,my_sensor:[21,41],my_sensor_act:21,my_ui_act:21,myapp:[40,41],mycommand:36,myqueri:36,name:[0,2,4,5,6,7,8,9,13,17,19,26,41,42,44,47],nativ:35,navig:6,need:[0,1,2,3,5,7,17,30,34,35,36,41,42,43,45,46],nethelp:[5,41],network:[0,3,4,5,18,36,45],never:[17,44],new_direct:6,newval:[30,43],next:[2,5,8,26,27,29,41,44],noic:32,noindex:47,none:[0,2,7,9,10,11,14,15,17,18,19,30,32,43,44,47],normal:[18,38],notic:35,notif:38,notifi:41,now:[0,5,23,26,27,29,41],npm:5,number:[9,10,25,26,33],numbervalu:[0,6,7,8,19,22,25,26,40,41,44,47],numer:44,object:30,obtain:46,occupi:[0,19,44,47],occur:[0,38],off:[0,8,10,19,22,41,47],off_icon:[0,19,47],off_text:[0,19,47],offer:39,often:27,omit:[4,38,46],on_icon:[0,19,47],on_text:[0,19,47],one:[2,5,6,7,8,9,10,11,13,15,17,18,21,25,26,32,34,38,40,41,44,46],ones:[4,10],onli:[0,3,8,10,11,19,23,30,40,41,42,43,46,47],open:[0,5,20,27,35],oper:[0,27,32,35,40,41],opposit:46,option:[0,3,19,27,47],order:[2,5,7,30,33,41,46],org:35,organ:41,orient:[34,46],orientation_sensor:46,other:[0,2,6,8,9,16,18,21,22,23,25,26,34,35,38,41,42,44],otherwis:44,out:[0,4,27,29,41],outdoor:15,output:[0,6,7,8,11,19,20,21,22,23,25,26,27,32,40,46,47],output_id:7,outsid:27,over:[25,34,36,40,46],overcom:40,overrid:[2,7,19,47],own:[4,26,30,38,40,41,42],packag:35,pad:9,page:[16,17,42],page_id:17,pan:[1,46],pan_chang:2,pan_valu:2,panel1:8,panel:[0,1,8,9,19,23,26,30,39,41,42,44,46,47],panel_id:[2,7,9,19,44,47],param1:36,param2:36,paramet:[0,2,7,8,9,10,17,19,26,32,38,40,41,42,44,45,47],parameter_1:4,part:[2,5,6,29,41,43,44],pass:[0,1,2,10,32,44,46],pass_valu:0,password:[4,38,42],path:42,paticip:5,paus:[30,43],pca9685_i2c_servo:1,pca9685devicedriv:[13,14],pca9685servoboard:1,pcf8574devicedriv:11,pcf859devicedriv:11,per:[1,2],percent:25,percentag:[8,19,47],perform:[0,40,41],persist_valu:[0,23,41,44],phone:[4,29,34,42],physic:[15,44],pick:41,pictur:2,pid:46,pid_control:46,pidcontrol:46,pil:2,pin:[8,10,11,13,14,30],pin_map:10,pip3:35,pip:[5,35],pitch:15,pixel:[2,7,8],place:40,plain:42,plain_us:42,platform:[2,3,10,11,14,15,16,18,20,21,22,23,25,26,27,28,29,32,34,35,40,41],pleas:35,plu:42,plugin:[20,27,38,42],poll:[41,44],polling_interv:44,polling_tim:31,pop:38,port:[4,18,20,21,22,27,38],portabl:30,posit:[1,46],possibl:[0,1,3,8,9,10,15,16,18,19,21,22,25,26,30,33,36,38,39,40,41,42,44,45,46,47],post:2,power:[8,42],predefin:[19,47],preinstal:35,prepar:[27,41],preselect:30,present:[19,23,30,47],press:[18,20,21,27,30,32,41],previou:[29,32],print:[0,4,21,30,36,43],prior:32,privat:[23,41,43],probe:43,proce:[27,29],process:[2,34,36,46],product:10,program:[5,10,13,15,34,41],project:[3,34,40,41],prompt:42,properti:[2,7,17,42,43,46],provid:10,pull:5,pull_up:11,pullup:32,push:[8,19,47],pwm:[10,12,32],pwm_start:32,pwm_stop:32,pwn:[14,32],python3:[20,27,45],python:[0,5,18,20,21,27,28,34,35,40,41,42],quarter:[0,8],queri:42,radial:8,radial_gaug:[8,19,26,30,38,44,47],rais:[0,4],rang:[0,8,11,38,44,46],rapsberri:18,raspberri:[0,1,2,3,14,18,21,27,30,34,35,41,45],rate:[19,47],ratio:[30,43],reach:[25,44],react:[6,21,22,25,29,41],read:[2,7,8,11,15,17,21,22,25,26,29,30,33,41,43,44,46],read_ful:[30,43],read_ir:[30,43],read_list:33,read_raw8:33,read_s16:33,read_s16b:33,read_s16l:33,read_s8:33,read_u16:[30,33,43],read_u16b:33,read_u16l:33,read_u8:33,read_valu:[30,43],read_word:[30,43],readabl:46,readi:[2,5,18,20,27,30,35,36,41],reading_interv:[44,46],real:44,reboot:0,receiv:[42,44],recod:41,recogn:16,record:2,reduc:32,refer:[2,9,13,17,44],referenc:9,reg:[30,43],regard:36,regist:33,register_command_handl:36,register_query_handl:36,rel:[8,40],releas:0,rem:[19,47],rememb:[23,41],render:26,repres:[19,47],represent:46,request:[3,5,18,20,27],requir:[10,27,34,35,38,41],reset:[0,10],resetlog:4,resid:[40,41],respect:13,respond:[2,7,17,29],respons:[8,26,29,34,40],restart:[0,23,41],restor:44,restrict:42,result:[0,3,18,33,36,41,46],retun:[19,47],reus:26,revers:33,reverse_byte_ord:[33,43],reversebyteord:30,revert:18,review:42,rgb:[19,47],rig:1,right:[0,6,23,41],right_pad_i:[8,9],right_pad_x:[8,9],right_spe:[0,6,46],risk:42,robot:[0,34,41,46],robot_task:0,roll:[15,46],room:[8,26,43],roomtemp1:43,root:[40,41],rotat:[0,46],rout:42,router:42,row:[9,30],rpi:5,rst:10,rubric:27,run:[0,2,3,5,10,11,13,14,15,16,18,20,21,22,23,24,25,26,27,28,29,30,34,35,36,38,40,41],run_async:0,same:[0,5,8,18,26,42,46],sampl:[5,10],save:[2,44],scale:[29,30,34],scan:[3,30,32],screen:[30,41,42,46],script:[0,4,18,21,26,27,29,40],sec:[19,47],second:[0,1,2,18,41,44],section1:8,section:[2,7,10,13,15,20,23,26,28,29,41,42,43,46],section_id:2,see:[2,3,4,5,9,10,13,15,18,21,26,27,29,41,42],seen:42,seldom:36,select:[7,10,11,14,15,19,26,47],self:[0,2,6,18,19,22,23,25,26,30,40,41,43,44,46,47],self_act:40,send:[0,36,46],send_command:36,send_messag:38,send_queri:36,sender_address:[4,38],sender_nam:[4,38],senor:[22,25,26,29],sens:41,sensor1:15,sensor:[0,6,9,12,16,18,21,22,23,25,26,30,34,38,40,42,46],sensor_1:[8,18,43],sensor_cpu_load:[16,23,41],sensor_cpu_temp:[16,23,41],sensor_id:44,sensor_typ:15,sensordevicedriv:[43,44],sent:[42,46],separ:[28,40,41],seper:41,seri:[0,38],serial:30,serv:[5,41],server:[1,4,5,24,34,38,40,41,42],servic:18,servo:[1,6,7,14,46],servo_motor:[1,46],set:[0,2,4,5,7,8,10,14,18,19,23,30,32,38,39,40,41,42,43,44,47],set_channel:32,set_gain:[30,43],set_interrupt:[0,23,41],set_ui_paramet:[0,8],setup:[10,34],sever:[5,8,10,18],should:[0,2,5,7,8,10,11,16,17,18,19,21,26,27,29,32,40,41,44,46,47],show:[0,1,3,5,8,9,10,11,13,15,16,18,20,22,23,25,26,28,30,34,39,41,43,44,46],show_button:2,show_nam:8,show_pan_tilt:2,show_sparklin:[0,8,21,22,25,26,29,44],show_valu:[0,8,44],shown:[17,19,26,38,42,44,47],shut:0,shutdown:[0,18],side:46,sign:[33,46],signal:[0,10,32,39,43],signific:33,simpl:0,singl:[3,15,36,40,44],sit:[19,47],situat:[0,10,46],size:[0,1,2,7,19,44,47],sleep:[0,30,43],slider:[19,47],small:[32,44],smtp:[4,38],snippet:[1,26,39,42,46],softwar:14,solut:30,some:[20,27,28,44],sometim:0,sourc:[0,1,2,5],space:[0,5,19,47],span:41,sparklin:[8,44],spawn:40,special:[0,1,6],specif:5,specifi:[0,1,4,8,16,19,26,33,41,42,43,44,47],speed:[0,6,8,13,22,23,25,26,39,40,41,46],sphinx:5,sphinx_rtd_them:5,split:44,spread:[34,40],sqlite:[20,27],sqlite_temp:[20,27],squar:[2,7],ssd1306:16,ssd1306_i2c_address:10,ssd1306devicedriv:[10,16],standard:[35,39],start:[0,3,4,5,14,18,23,25,27,30,32,35,36,40,41,44,46],start_pwm:14,start_record:2,state:[10,32,40],steer:[0,6,46],step:[41,43],stepper:13,still:29,stop:[0,2,7,14,17,18,20,23,27,32,41],stop_gat:0,stop_record:2,storag:[18,20,27],store:[5,44],str:[0,2,7,9,17,19,44,47],strait:6,stream:[1,2,24],streamer:2,string:[0,19,44,46,47],stringvalu:[19,47],strongli:42,structur:[40,41],studio:5,sub:[15,40],submit:5,subtitl:27,sudo:35,support:[0,5,10,11,14,16,20,28,34,35],sure:[10,35],synchron:0,sys:[23,41,44],system:[1,3,8,9,23,26,30,35,40,41,42,43,44,46],system_control:41,system_sensor:[40,41],take:[0,6,8,19,25,26,43,47],tcp:[18,20,27],tell:[40,41],temp:[8,16,22,23,25,26,40,41,43],temp_1:15,temp_sensor:0,temperatur:[3,16,22,23,25,26,40,41],temperature_sensor:43,templat:16,termin:[0,2,21,27,29,35,40],test:[10,39],text:[0,10,16,19,21,27,42,44,47],than:[1,21,34,40],thei:[2,46],them:[1,2,16,18,34],therebi:40,thermomet:8,thi:[0,2,3,5,7,8,9,10,11,13,15,16,17,18,19,20,23,24,26,27,28,29,30,32,36,40,41,42,44,45,46,47],thread:[2,40],three:[0,8,15],through:10,thru:[16,41],tilt:1,tilt_chang:2,tilt_valu:2,time:[0,16,19,21,30,40,43,44,47],timeouterror:0,timout:0,titl:[0,8,9,23,26,30,39,41,42],tls2561:[30,43],tls:[4,38],togeth:[0,7,19,41,44,47],toggl:22,too:42,tool:[5,45],top:[19,23,26,41,47],total:[19,47],traffic:42,transmit:[36,40],transpar:36,travers:4,trigger:[0,19,21,23,36,41,44,47],trigger_interrupt_valu:0,trigger_temp:[23,41],trigger_valu:[0,21],truli:40,tsl2561:30,tsl2561devic:30,tsl2561devicedriv:15,tsl2561sdevicedriv:43,tupl:[19,44,47],turn:[0,7,30,41],twice:[8,26],two:[0,6,8,9,11,20,21,27,40,41,44,46],type:[6,7,8,16,18,19,21,22,23,25,26,29,30,34,38,40,41,43,44,46,47],u00b0:16,ui_paramet:[2,7],ui_siz:[2,7],under:5,underlai:[7,40],uniqu:9,unit:[2,7,19,43,44,47],unless:42,unsign:33,unsur:45,until:2,updat:[5,6,16,18,19,35,41,44,45,47],upon:[0,7,17,27,30,44],usag:[3,19,47],usbcamera:2,use:[0,1,2,3,10,16,18,22,23,26,30,32,36,38,41,42,43,45,46],use_ssl:[4,42],used:[0,2,4,5,9,10,13,14,17,21,26,30,32,41,44],useful:46,user:[4,6,7,8,9,25,26,34,35,38,39,41,46],user_group:42,user_log:[4,8,9,38],uses:[0,4,8,10,22,25,26,29,30,40,41,42],using:[1,8,13,27,30,36,41,45],util:[5,41,46],utilis:26,valid:[11,44],valu:[1,2,6,7,9,10,11,14,16,17,18,21,22,23,25,26,29,30,31,32,33,40,41,43,44],value_class:7,value_icon:0,value_s:[19,47],variou:30,veri:[16,24,27,34,41],version:[5,35],vertic:8,vertical_gaug:[19,44,47],vertical_linear_gaug:8,vertical_slid:[19,47],via:[0,1,2,4,5,6,7,10,16,17,18,25,30,32,33,35,38,39,40,41,42,43],video0:1,video:2,view:[8,26,29,41],viewer:1,visibl:[30,42,43,46],vision:[1,2,24],visual:5,voltag:15,wai:[0,6,8,26,41,42],wait:[0,2],wait_next_fram:2,want:[0,1,3,5,18,21,22,26,41,45],warn:[4,38,44],web:[6,9,16,18,21,24,25,34,39,40,41,42],websocket:[18,20,27],week:[19,47],well:18,wheel:46,when:[0,1,2,3,4,5,6,7,8,9,13,16,17,18,19,21,22,23,25,26,27,29,30,32,35,36,38,40,41,42,44,46,47],where:[0,8,9,10,15,16,18,22,26,29,32,38,39,40,41,42,46],whether:45,which:40,whit:42,who:42,width:[0,1,2,7,8,10,19,26,47],win:18,window:[8,20,21,24,26,27,29,35],wire:34,within:[0,36],without:[6,8,33,41,44],wordval:[30,43],work:[5,6,18,30,36,40,41],world:41,would:10,write16:33,write8:[30,33,43],write:33,write_list:33,write_raw8:33,ws_port:4,year:[19,47],you:[0,1,2,3,4,5,6,7,8,10,17,18,19,21,22,23,26,27,29,30,32,34,35,36,38,40,41,42,43,44,45,46,47],your:[0,2,4,5,6,7,8,10,17,18,20,21,26,27,29,30,32,34,35,36,38,39,40,41,42,43,44,45],zero:44},titles:["Actions","Camera and video","Camera api","Commandline tool","Configuration","Contribute","Controllers","Controllers api","Dashboards","Dashboards api","Displays","GPIO","Device library","Motors","PWM","Sensors","Displays","Display api","Distributed applications","Kervi values api","Get started","Actions","Actions","The big picture","Camera (Raspberry Pi)","Controllers","Dashboards","Hello world","Get started","Sensors","Hardware and devices","Devices API","GPIO API","I2C API","Kervi!","Installation","Interprocess communication","Kervi API","Messaging","Motors","Process distribution","Overview","Security","Sensors","Sensors API","Run as service","Signal handling","Kervi values api"],titleterms:{"boolean":8,"case":18,"class":36,One:15,The:23,Use:18,access:[4,42],action:[0,21,22,41],anatomi:41,anonym:42,api:[2,7,9,17,19,31,32,33,37,44,47],applic:[3,5,18,41],asynchron:0,auto:18,batteri:15,big:23,bmp085:15,call:0,camera:[1,2,24],code:4,command:36,commandlin:3,commun:36,complet:0,config:4,configur:[4,18,38],connect:18,contribut:5,control:[6,7,8,25,41],core:5,cpu:15,custom:38,cw2015:15,dashboard:[0,5,8,9,26,41,46],defin:0,demo:5,detect:[3,45],develop:5,devic:[3,5,12,30,31,43],discoveri:18,disk:15,displai:[10,16,17],distribut:[18,40,41],document:5,driver:5,ds18b20:15,encrypt:42,enviro:5,event:36,exampl:0,file:41,get:[20,28],github:5,gpio:[8,11,30,32],handl:46,hardwar:[3,30],hat:15,hd44780:10,hello:[20,27],i2c:[10,11,14,15,30,33],implement:43,input:41,instal:[5,35,45],integr:5,interprocess:36,interrupt:0,kervi:[5,19,34,37,41,43,47],librari:[5,12,30,43],light:15,line:41,link:[0,8,41,43,46],ln298:13,load:15,lsm9ds0:15,lux:15,mail:38,main:18,manag:42,mcp23008:11,mcp23017:[10,11],memori:15,messag:38,modul:18,motor:[13,39],multi:[0,41],number:8,orient:15,other:15,output:41,overview:41,pack:15,packag:5,pad:8,pca9685:14,pcf8574:[10,11],pcf8574a:11,pcf859:11,pictur:23,platform:[5,30],power:15,prerequisit:35,pressur:15,process:[0,40,41],project:5,pwm:14,queri:36,raspberi:14,raspberri:24,restart:45,rpi:15,run:45,scaffold:3,secur:42,select:30,send:38,sensor:[8,15,29,41,43,44],servic:45,servo:39,sidebar:27,signal:46,simpl:42,singl:41,spi:30,spine:36,ssd1306:10,start:[20,28,45],stepper:39,stop:45,system:0,temp:15,temperatur:15,test:5,timeout:0,titl:27,tool:3,transform:46,tsl2561:15,uninstal:45,use:15,user:42,valu:[0,4,8,19,38,46,47],video:1,web:5,wire:15,without:18,world:[20,27]}})